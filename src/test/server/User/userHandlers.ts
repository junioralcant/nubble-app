import {BASE_URL, PageAPI} from '@api';
import {IUserAPI, PATH_USER} from '@domain';
import {http, HttpResponse} from 'msw';

import {userMocked} from './userMocked';

const FULL_URL = `${BASE_URL}/${PATH_USER}`;
export const userHandles = [
  http.get(`${FULL_URL}`, async () => {
    const response: PageAPI<IUserAPI.Model> = userMocked.mockedUserResponse;
    return HttpResponse.json(response, {status: 200});
  }),
  http.get<{userId: string}>(`${FULL_URL}/:userId`, async ({params}) => {
    const userApi = userMocked.userList.find(
      user => user.id.toString() === params.userId,
    );

    return HttpResponse.json(userApi, {status: 200});
  }),
];
