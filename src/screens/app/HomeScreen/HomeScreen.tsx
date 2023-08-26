import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {IPostList, PostModel} from '@domain';

import {AppTabScreenProps} from '@routes';

import {PostItem, Screen} from '@components';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export type HomeProps = {
  postListService: IPostList;
} & AppTabScreenProps<'HomeScreen'>;

export function HomeScreen({postListService}: HomeProps) {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();

  async function fetchPosts() {
    try {
      setLoading(true);
      const postsList = await postListService.getList();
      setPosts(postsList);
    } catch (error: any) {
      console.log('Error: ', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={fetchPosts} />
        }
        contentContainerStyle={{flex: posts.length ? 0 : 1}}
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
