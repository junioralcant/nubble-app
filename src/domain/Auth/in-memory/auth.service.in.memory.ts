import {IAuth} from '../auth.contracts';
import {AuthCredentialsModel, SignUpDataModel} from '../auth.model';
import {mockedAuthCredentials} from '../useCases/__test__/mocks/mocks';

export class AuthServiceInMemory implements IAuth {
  email = '';
  password = '';
  token = '';
  signUpData = {};
  username = '';

  async signIn(email: string, password: string): Promise<AuthCredentialsModel> {
    this.email = email;
    this.password = password;

    return mockedAuthCredentials;
  }
  signOut(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async signUp(signUpData: SignUpDataModel): Promise<void> {
    this.signUpData = signUpData;
  }
  updateToken(token: string): void {
    this.token = token;
  }
  removeToken(): void {
    console.log('remove token');
  }
  async isEmailAvailable(email: string): Promise<boolean> {
    this.email = email;
    return true;
  }
  async isUserNameAvailable(username: string): Promise<boolean> {
    this.username = username;
    return true;
  }
  async requestNewPassword(
    params: IAuth.ForgotPasswordParams,
  ): Promise<string> {
    console.log(params);
    return 'requestNewPassword';
  }
  async authenticateByRefreshToken(
    refreshToken: string,
  ): Promise<AuthCredentialsModel> {
    console.log(refreshToken);
    return mockedAuthCredentials;
  }
}
