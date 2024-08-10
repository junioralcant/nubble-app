import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {UserModel} from '@domain';
import {useSearchHistoryUserList} from '@services';

import {Box, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistoryUserList();
  function renderItem({item}: ListRenderItemInfo<UserModel>) {
    return <ProfileUser user={item} />;
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={<Text>Buscar recentes</Text>}
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
}
