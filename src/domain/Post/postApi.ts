import {IPostList} from './post.contracts';
import {PostModel} from './Post.model';
import {postListMock} from './PostListMock';

export class PostListApi implements IPostList {
  async getList(): Promise<PostModel[]> {
    return postListMock;
  }
}
