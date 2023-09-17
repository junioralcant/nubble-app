import React from 'react';

import {PostCommentModel} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = {
  postComment: PostCommentModel;
};
export function PostCommentItem({postComment}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={postComment.author.profileUrl} />
      <Box ml="s12" flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message} - {postComment.createdAtRelative}
        </Text>
      </Box>
    </Box>
  );
}
