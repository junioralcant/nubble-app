import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {IUser, useUserSearch, userServiceFactory} from '@domain';

import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

import {Icon, ProfileUser, Screen, TextInput} from '@components';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);
  const {list} = useUserSearch(debouncedSearch, userServiceFactory());

  const renderItem = ({item}: ListRenderItemInfo<IUser.Model>) => {
    return <ProfileUser user={item} />;
  };

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
          placeholder="Digite sua busca"
        />
      }>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </Screen>
  );
}
