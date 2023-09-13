import React from 'react';

import {PostModel} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type PostHeaderProps = Pick<PostModel, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />

      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
}
