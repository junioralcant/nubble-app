import {usePaginateList, PostModel, IPostList} from '@domain';

export function usePostList(postListService: IPostList) {
  return usePaginateList<PostModel>(async params =>
    postListService.getList(params),
  );
}
