import {
  AuthCredentialsModel,
  authApiFactory,
  authServiceFactory,
} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

type InterceptorProps = {
  authCredentials: AuthCredentialsModel | null;
  saveCredentials: (ac: AuthCredentialsModel) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authApiFactory().isRefreshTokenRequest(failedRequest);

      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.send) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials =
          await authServiceFactory().authenticateByRefreshToken(
            authCredentials.refreshToken,
          );

        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
      }

      return Promise.reject(responseError);
    },
  );

  return () => api.interceptors.response.eject(interceptor);
}
