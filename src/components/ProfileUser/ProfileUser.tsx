import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {UserModel} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  Text,
} from '@components';

type ProfileUserProps = {
  user: Pick<UserModel, 'username' | 'profileUrl' | 'id'>;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  ...pressableBoxProps
}: ProfileUserProps) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }

    navigation.navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <ProfileAvatar imageURL={user.profileUrl} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {user.username}
      </Text>
    </PressableBox>
  );
}
