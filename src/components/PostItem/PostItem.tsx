import React from 'react';

import {PostModel} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

type PostItemProps = {
  post: PostModel;
};

export function PostItem({post}: PostItemProps) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
