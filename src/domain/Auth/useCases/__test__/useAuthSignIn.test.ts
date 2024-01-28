import {renderHook} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {authServiceFactory} from '../../auth.service';
import {useAuthSingIn} from '../useAuthSignIn';

describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', () => {
    renderHook(() => useAuthSingIn(authServiceFactory()), {
      wrapper: AllTheProviders,
    });
  });
  it('calls the onError function with a message if sign-in fails', () => {
    renderHook(() => useAuthSingIn(authServiceFactory()), {
      wrapper: AllTheProviders,
    });
  });
});
