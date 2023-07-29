import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {IPostList, PostModel} from '@domain';

import {AppTabScreenProps} from '@routes';

import {Box, Screen, Text} from '@components';

export type HomeProps = {
  postListService: IPostList;
} & AppTabScreenProps<'HomeScreen'>;

export function HomeScreen({postListService}: HomeProps) {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    postListService.getList().then(list => setPosts(list));
  }, [postListService]);

  function renderItem({item}: ListRenderItemInfo<PostModel>) {
    return (
      <Box mb="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: item.author.profileURL}}
            style={{width: 32, height: 32}}
          />
          <Text>{item.author.userName}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          resizeMode="cover"
          style={{width: Dimensions.get('screen').width, height: 300}}
        />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={posts}
        keyExtractor={post => post.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
