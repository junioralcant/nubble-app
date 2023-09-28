import React from 'react';
import {Pressable} from 'react-native';

import {PostModel} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type PostHeaderProps = Pick<PostModel, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
