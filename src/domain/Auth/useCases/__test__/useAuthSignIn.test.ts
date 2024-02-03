import {renderHook, waitFor} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {AuthServiceInMemory} from '../../in-memory';
import {useAuthSingIn} from '../useAuthSignIn';

import {mockedAuthCredentials} from './mocks/mocks';

const mockedSaveCredentials = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCredentials: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    const authServiceInMemory = new AuthServiceInMemory();
    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(
      () => useAuthSingIn(authServiceInMemory, {onSuccess: mockedOnSuccess}),
      {
        wrapper: AllTheProviders,
      },
    );

    result.current.signIn({
      email: 'mariajulia@coffstack.com',
      password: 'supersecret',
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
  });
  it('calls the onError function with a message if sign-in fails', async () => {
    const authServiceInMemory = new AuthServiceInMemory();

    jest
      .spyOn(authServiceInMemory, 'signIn')
      .mockRejectedValueOnce(new Error('Invalid user'));

    const mockedError = jest.fn();

    const {result} = renderHook(
      () => useAuthSingIn(authServiceInMemory, {onError: mockedError}),
      {
        wrapper: AllTheProviders,
      },
    );

    result.current.signIn({
      email: 'mariajulia@coffstack.com',
      password: 'supersecret',
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedError).toHaveBeenCalledWith('Invalid user');
  });
});
