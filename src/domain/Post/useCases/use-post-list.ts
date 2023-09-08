import {usePaginateList, PostModel, IPostList} from '@domain';

export function usePostList(postListService: IPostList) {
  return usePaginateList<IPostList, PostModel>(postListService);
}
