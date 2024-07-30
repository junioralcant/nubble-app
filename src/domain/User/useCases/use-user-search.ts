import {QueryKey, usePaginateList} from '@infra';

import {IUser} from '../user.contract';

export function useUserSearch(search: string, userService: IUser) {
  return usePaginateList(
    [QueryKey.UserList, search],
    () => userService.searchUser(search),
    {enabled: search.length > 0, staleTime: 30000},
  );
}
