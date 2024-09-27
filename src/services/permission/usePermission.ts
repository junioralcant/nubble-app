import {useEffect, useState} from 'react';

import {permissionService} from './permission-services';
import {PermissionName, PermissionStatus} from './permission-types';

export function usePermission(permissionName: PermissionName) {
  const [status, setStatus] = useState<PermissionStatus>();
  const [isLoading, setIsLoading] = useState(true);

  async function checkPermission() {
    try {
      const initialState = await permissionService.check(permissionName);
      if (initialState === 'denied') {
        const _status = await permissionService.request(permissionName);
        setStatus(_status);
      } else {
        setStatus(initialState);
      }
    } catch (error) {
      setStatus('unavailable');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    status,
    isLoading,
  };
}
