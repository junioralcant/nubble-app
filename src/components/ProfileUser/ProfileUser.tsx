import React from 'react';
import {Pressable} from 'react-native';

import {UserModel} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type ProfileUserProps = {
  user: Pick<UserModel, 'username' | 'profileUrl' | 'id'>;
};

export function ProfileUser({user}: ProfileUserProps) {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
