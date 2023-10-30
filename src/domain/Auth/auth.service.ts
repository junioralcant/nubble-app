import {authApiFactory} from './auth-api';
import {authAdapter} from './auth.adapter';
import {IAuth, IAuthAPI} from './auth.contracts';
import {SignUpDataModel} from './auth.model';

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

  async signUp(signUpData: SignUpDataModel): Promise<void> {
    await this.authApi.signUp(signUpData);
  }

  updateToken(token: string): void {
    this.authApi.updateToken(token);
  }

  removeToken(): void {
    this.authApi.removeToken();
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const {isAvailable} = await this.authApi.isEmailAvailable(email);
    return isAvailable;
  }

  async isUserNameAvailable(userName: string): Promise<boolean> {
    console.log(userName);

    const {isAvailable} = await this.authApi.isUserNameAvailable(userName);
    return isAvailable;
  }
}

export function authServiceFactory(): IAuth {
  return new AuthService(authApiFactory());
}
