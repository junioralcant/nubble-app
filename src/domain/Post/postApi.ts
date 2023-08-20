import {IPostListAPI} from './post.contracts';

export class PostListApi implements IPostListAPI {
  async getList(): Promise<IPostListAPI.ResponseAPI> {
    let response = await fetch('http://localhost:3333/user/post', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer Mw.2aEhvE8sdkU788Ay3gTRm9PrEDaWkB1Fx3h9G5n0ANdwXsRVlt62vTNW2-ZD',
      },
    });

    let data: IPostListAPI.ResponseAPI = await response.json();

    return data;
  }
}
