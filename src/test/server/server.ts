import {setupServer} from 'msw/node';

import {postCommentHandles} from './PostComment/postCommentHandles';
import {userHandles} from './User/userHandlers';

export const server = setupServer(...postCommentHandles, ...userHandles);

export {userMocked} from './User/userMocked';
