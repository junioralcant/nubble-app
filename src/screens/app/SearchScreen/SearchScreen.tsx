import React from 'react';

import {AppScreenProps} from '@routes';

import {Icon, Screen, Text, TextInput} from '@components';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = React.useState('');

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Text>Search Screen</Text>
    </Screen>
  );
}
