import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {IUser, useUserGetById} from '@domain';

import {AppScreenProps} from '@routes';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';

type Props = {userService: IUser} & AppScreenProps<'ProfileScreen'>;

export function ProfileScreen({route, userService}: Props) {
  const userId = route.params.userId;

  const {isLoading, isError, refetch, user, isRefetching} = useUserGetById(
    userId,
    userService,
  );

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }>
          <Box alignItems="center" flex={1}>
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
        </ScrollView>
      )}
    </Screen>
  );
}
