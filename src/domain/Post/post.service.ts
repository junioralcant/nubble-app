import {IPostList} from './post.contracts';
import {PostModel} from './Post.model';

export class PostListService implements IPostList {
  constructor(private readonly postApi: IPostList) {}

  async getList(): Promise<PostModel[]> {
    const postList = await this.postApi.getList();
    return postList;
  }
}
