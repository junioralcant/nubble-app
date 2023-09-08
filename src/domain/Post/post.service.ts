import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './post.adapter';
import {IPostList, IPostListAPI, PageParams} from './post.contracts';
import {PostModel} from './post.model';
import {PostListApi} from './postApi';

export class PostListService implements IPostList {
  constructor(private readonly postApi: IPostListAPI) {}

  async getList(params: PageParams): Promise<Page<PostModel>> {
    const postList = await this.postApi.getList({
      page: params.page,
      perPage: 10,
    });

    return {
      data: postList.data.map(postAdapter.toPost),
      meta: apiAdapter.toMetaDataPage(postList.meta),
    };
  }
}

export function postListServiceFactory(): IPostList {
  const postListApi = new PostListApi();
  return new PostListService(postListApi);
}
