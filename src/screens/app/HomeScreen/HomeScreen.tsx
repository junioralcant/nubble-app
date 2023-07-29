import React, {useEffect, useState} from 'react';

import {IPostList, PostModel} from '@domain';

import {AppTabScreenProps} from '@routes';

import {Screen, Text} from '@components';

export type HomeProps = {
  postListService: IPostList;
} & AppTabScreenProps<'HomeScreen'>;

export function HomeScreen({postListService}: HomeProps) {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    postListService.getList().then(list => setPosts(list));
  }, [postListService]);

  console.log(posts);

  return (
    <Screen>
      {posts.map(post => (
        <Text key={post.id}>{post.text}</Text>
      ))}
    </Screen>
  );
}
