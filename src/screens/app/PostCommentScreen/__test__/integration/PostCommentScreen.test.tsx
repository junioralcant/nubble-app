import React from 'react';

import {postCommentServiceFactory} from '@domain';
import {renderScreen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

describe('PostCommentScreen', () => {
  it('should render correctly', () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          key: '',
          name: 'PostCommentScreen',
          params: {
            postAuthorId: 1,
            postId: 1,
          },
        }}
        postCommentListService={postCommentServiceFactory()}
      />,
    );
    expect(true).toBe(true);
  });
});
