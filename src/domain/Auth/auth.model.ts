import {UserModel} from '../User/user.model';

export interface AuthCredentialsModel {
  token: string;
  refreshToken: string;
  tokenExpiresAt: string;
  user: UserModel;
}

export type SignUpDataModel = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};
