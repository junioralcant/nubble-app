import React from 'react';

import {IPostComment} from '@domain';

import {AppScreenProps} from '@routes';

import {Box, Screen, Text} from '@components';

type PostCommentScreenProps = {
  postCommentListService: IPostComment;
} & AppScreenProps<'PostCommentScreen'>;

export function PostCommentScreen({
  postCommentListService,
  route,
}: PostCommentScreenProps) {
  const postId = route.params.postId;

  postCommentListService
    .getList(postId)
    .then(comments => console.log(comments));

  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Telas de comentários</Text>
      </Box>
    </Screen>
  );
}
