import {usePaginateList, PostModel, PageParams} from '@domain';
import {Page} from '@types';

export function usePostList(
  getList: (params?: PageParams | undefined) => Promise<Page<PostModel>>,
) {
  return usePaginateList<PostModel>(getList);
}
