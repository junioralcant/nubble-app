import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {UserModel} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  Box,
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@components';

type ProfileUserProps = {
  user: Pick<UserModel, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
  RightComponent?: React.ReactNode;
} & PressableBoxProps;

export function ProfileUser({
  user,
  avatarProps,
  onPress,
  RightComponent,
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
      justifyContent="space-between"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar
          size={avatarProps?.size}
          imageURL={user.profileUrl}
          borderRadius={avatarProps?.borderRadius}
        />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}
