import {useContext} from 'react';

import {AuthCredentialsService} from './auth-credentials.types';
import {AuthCredentialsContext} from './Provider/auth-credentials.provider';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider',
    );
  }

  return context;
}
