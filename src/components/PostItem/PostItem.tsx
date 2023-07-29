import React from 'react';

import {PostModel} from '@domain';

import {Box} from '@components';

import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

type PostItemProps = {
  post: PostModel;
};

export function PostItem({post}: PostItemProps) {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
    </Box>
  );
}
