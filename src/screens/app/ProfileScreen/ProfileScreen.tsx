import React from 'react';

import {IUser, useUserGetById} from '@domain';

import {AppScreenProps} from '@routes';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';

type Props = {userService: IUser} & AppScreenProps<'ProfileScreen'>;

export function ProfileScreen({route, userService}: Props) {
  const userId = route.params.userId;

  const {isLoading, isError, user} = useUserGetById(userId, userService);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}
