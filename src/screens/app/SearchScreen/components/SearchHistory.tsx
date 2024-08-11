import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {UserModel} from '@domain';
import {useSearchHistoryService, useSearchHistoryUserList} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistoryUserList();
  const {removeUser} = useSearchHistoryService();
  function renderItem({item}: ListRenderItemInfo<UserModel>) {
    return (
      <ProfileUser
        user={item}
        avatarProps={{size: 48}}
        RightComponent={
          <Icon
            color="gray1"
            name="trash"
            onPress={() => removeUser(item.id)}
          />
        }
      />
    );
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={<Text mb="s16">Buscar recentes</Text>}
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
}
