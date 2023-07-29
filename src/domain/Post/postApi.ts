import {IPostList} from './post.contracts';
import {PostModel} from './post.model';
import {postListMock} from './postListMock';

export class PostListApi implements IPostList {
  async getList(): Promise<PostModel[]> {
    await new Promise(resolve => setTimeout(() => resolve(''), 1000));
    return postListMock();
  }
}
