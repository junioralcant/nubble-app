import {UserModel} from '../User/user.model';

export interface AuthCredentialsModel {
  token: string;
  user: UserModel;
}
