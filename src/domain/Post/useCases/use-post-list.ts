import {PostModel, IPostList} from '@domain';
import {usePaginateList} from '@infra';

export function usePostList(postListService: IPostList) {
  return usePaginateList<PostModel>(async params =>
    postListService.getList(params),
  );
}
