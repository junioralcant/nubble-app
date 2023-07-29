import {IPostList} from './post.contracts';
import {PostModel} from './post.model';
import {PostListApi} from './postApi';

export class PostListService implements IPostList {
  constructor(private readonly postApi: IPostList) {}

  async getList(): Promise<PostModel[]> {
    const postList = await this.postApi.getList();
    return postList;
  }
}

const postListApi = new PostListApi();
export const postListService = new PostListService(postListApi);
