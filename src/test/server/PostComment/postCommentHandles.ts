import {BASE_URL} from '@api';
import {IPostCommentAPI, PATH_POST_COMMENT} from '@domain';
import {http, HttpResponse} from 'msw';

import {mockedData} from './mocks';

export const postCommentHandles = [
  http.get(`${BASE_URL}${PATH_POST_COMMENT}`, async () => {
    const response: IPostCommentAPI.ResponseAPI =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
