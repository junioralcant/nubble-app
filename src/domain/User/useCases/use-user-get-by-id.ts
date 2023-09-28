import {useCallback, useEffect, useState} from 'react';

import {IUser} from '../user.contract';
import {UserModel} from '../user.model';

export function useUserGetById(id: number, userService: IUser) {
  const [user, setUser] = useState<UserModel>();
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id, userService]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    error,
    loading,
  };
}
