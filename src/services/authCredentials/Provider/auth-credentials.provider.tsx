import {PropsWithChildren, createContext, useState} from 'react';

import {AuthCredentialsModel} from '@domain';

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
  const [isLoading] = useState(true);

  async function saveCredentials(ac: AuthCredentialsModel): Promise<void> {
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
