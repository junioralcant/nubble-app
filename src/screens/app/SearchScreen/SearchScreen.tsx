import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {IUser, useUserSearch, userServiceFactory} from '@domain';
import {useSearchHistoryService} from '@services';

import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

import {Icon, ProfileUser, Screen, TextInput} from '@components';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const {addUser} = useSearchHistoryService();
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);
  const {list} = useUserSearch(debouncedSearch, userServiceFactory());

  const renderItem = ({item}: ListRenderItemInfo<IUser.Model>) => {
    return <ProfileUser onPress={() => addUser(item)} user={item} />;
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
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.username}
        />
      )}
    </Screen>
  );
}
