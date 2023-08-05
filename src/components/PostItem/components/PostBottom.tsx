import React from 'react';

import {PostModel} from '@domain';

import {Box, Text} from '@components';

type PostBottomProps = Pick<PostModel, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: PostBottomProps) {
  let commentText = getCommentText(commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver  ${commentCount} comentários`;
  }
}
