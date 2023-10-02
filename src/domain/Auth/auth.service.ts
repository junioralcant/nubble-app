import {authApiFactory} from './auth-api';
import {authAdapter} from './auth.adapter';
import {IAuth, IAuthAPI} from './auth.contracts';

export class AuthService implements IAuth {
  constructor(private readonly authApi: IAuthAPI) {}

  async signIn(email: string, password: string): Promise<IAuth.Model> {
    try {
      const authCredentialsAPI = await this.authApi.signIn(email, password);
      return authAdapter.toAuthCredentials(authCredentialsAPI);
    } catch (error) {
      throw new Error('email ou senha inválido');
    }
  }

  async signOut(): Promise<string> {
    const message = await this.authApi.signOut();
    return message;
  }

  updateToken(token: string): void {
    this.authApi.updateToken(token);
  }

  removeToken(): void {
    this.authApi.removeToken();
  }
}

export function authServiceFactory(): IAuth {
  return new AuthService(authApiFactory());
}
