import React from 'react';

import {useUserSearch, userServiceFactory} from '@domain';

import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

import {Icon, Screen, Text, TextInput} from '@components';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);
  const {list} = useUserSearch(debouncedSearch, userServiceFactory());
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
      {list?.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  );
}
