import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {IPostList, PostModel, usePostList} from '@domain';

import {AppTabScreenProps} from '@routes';

import {PostItem, Screen} from '@components';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export type HomeProps = {
  postListService: IPostList;
} & AppTabScreenProps<'HomeScreen'>;

export function HomeScreen({postListService}: HomeProps) {
  const {error, loading, fetchPosts, posts, fetchNextPage} = usePostList({
    postListService,
  });

  function renderItem({item}: ListRenderItemInfo<PostModel>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        contentContainerStyle={{flex: posts.length ? 0 : 1}}
        data={posts}
        keyExtractor={post => post.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={fetchPosts} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
