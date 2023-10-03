import {AuthCredentialsModel} from '@domain';

export type AuthCredentialsService = {
  authCredentials: AuthCredentialsModel | null;
  saveCredentials: (ac: AuthCredentialsModel) => Promise<void>;
  remove: () => Promise<void>;
  isLoading: boolean;
};
