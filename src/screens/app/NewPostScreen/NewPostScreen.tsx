import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {AppTabScreenProps} from '@routes';

import {Screen} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;
export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const {list} = useCameraRoll();
  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        key={item}
        source={{uri: item}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }
  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        numColumns={NUM_COLUMNS}
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={
          <Header imageUri={list[0]} imageWidth={SCREEN_WIDTH} />
        }
      />
    </Screen>
  );
}
