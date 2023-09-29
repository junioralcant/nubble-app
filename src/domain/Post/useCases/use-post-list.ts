import {PostModel, IPostList} from '@domain';
import {QueryKey, usePaginateList} from '@infra';

export function usePostList(postListService: IPostList) {
  return usePaginateList<PostModel>([QueryKey.PostList], async params =>
    postListService.getList(params),
  );
}
