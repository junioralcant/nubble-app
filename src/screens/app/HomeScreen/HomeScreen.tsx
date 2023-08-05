import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {IPostList, PostModel} from '@domain';

import {AppTabScreenProps} from '@routes';

import {PostItem, Screen} from '@components';

export type HomeProps = {
  postListService: IPostList;
} & AppTabScreenProps<'HomeScreen'>;

export function HomeScreen({postListService}: HomeProps) {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    postListService.getList().then(list => setPosts(list));
  }, [postListService]);

  function renderItem({item}: ListRenderItemInfo<PostModel>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={posts}
        keyExtractor={post => post.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
