import {PostModel} from './Post.model';

export interface IPostList {
  getList(): Promise<PostModel[]>;
}
