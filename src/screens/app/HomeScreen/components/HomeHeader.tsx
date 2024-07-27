import React from 'react';

import {SimpleLogo} from '@assets';
import {useNavigation} from '@react-navigation/native';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps, Icon} from '@components';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  const navigation = useNavigation();

  function navigateToSearchScreen() {
    navigation.navigate('SearchScreen');
  }

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon onPress={navigateToSearchScreen} name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 's24',
  pb: 's24',
};
