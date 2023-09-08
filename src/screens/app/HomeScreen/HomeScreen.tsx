import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {IPostList, PostModel, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {AppTabScreenProps} from '@routes';

import {PostItem, Screen} from '@components';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export type HomeProps = {
  postListService: IPostList;
} & AppTabScreenProps<'HomeScreen'>;

export function HomeScreen({postListService}: HomeProps) {
  const {error, loading, fetchInitialData, data, fetchNextPage} =
    usePostList(postListService);

  const flatListRef = useRef<FlatList<PostModel>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<PostModel>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{flex: data.length ? 0 : 1}}
        data={data}
        keyExtractor={post => post.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchInitialData} />
        }
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty
            loading={loading}
            error={error}
            refetch={fetchInitialData}
          />
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
