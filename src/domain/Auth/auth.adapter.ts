import {userAdapter} from '../User/user.adapter';

import {AuthCredentialsAPI} from './auth-api.types';
import {AuthCredentialsModel} from './auth.model';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentialsModel {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {toAuthCredentials};
