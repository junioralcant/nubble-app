import {authApiFactory} from './auth-api';
import {authAdapter} from './auth.adapter';
import {IAuth, IAuthAPI} from './auth.contracts';
import {AuthCredentialsModel, SignUpDataModel} from './auth.model';

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

  async isUserNameAvailable(username: string): Promise<boolean> {
    const {isAvailable} = await this.authApi.isUserNameAvailable(username);

    return isAvailable;
  }

  async requestNewPassword(
    params: IAuth.ForgotPasswordParams,
  ): Promise<string> {
    const {message} = await this.authApi.forgotPassword(params);
    return message;
  }

  async authenticateByRefreshToken(
    refreshToken: string,
  ): Promise<AuthCredentialsModel> {
    const acAPI = await this.authApi.refreshToken(refreshToken);
    return authAdapter.toAuthCredentials(acAPI);
  }
}

export function authServiceFactory(): IAuth {
  return new AuthService(authApiFactory());
}
