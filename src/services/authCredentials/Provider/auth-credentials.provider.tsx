import {PropsWithChildren, createContext, useEffect, useState} from 'react';

import {registerInterceptor} from '@api';
import {AuthCredentialsModel, authServiceFactory} from '@domain';

import {authCredentialsStorage} from '../auth-credentials-storage';
import {AuthCredentialsService} from '../auth-credentials.types';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({children}: PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentialsModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      saveCredentials,
      removeCredentials,
    });

    return interceptor;
  }, [authCredentials]);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      console.log(ac?.token);

      if (ac) {
        authServiceFactory().updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentialsModel): Promise<void> {
    authServiceFactory().updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authServiceFactory().removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
