import {postAdapter} from './post.adapter';
import {IPostList, IPostListAPI} from './post.contracts';
import {PostModel} from './post.model';
import {PostListApi} from './postApi';

export class PostListService implements IPostList {
  constructor(private readonly postApi: IPostListAPI) {}

  async getList(): Promise<PostModel[]> {
    const postList = await this.postApi.getList();
    return postList.data.map(postAdapter.toPost);
  }
}

const postListApi = new PostListApi();
export const postListService = new PostListService(postListApi);
