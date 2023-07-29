import {PostModel} from './post.model';

export interface IPostList {
  getList(): Promise<PostModel[]>;
}
