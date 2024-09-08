import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll} from '@services';

import {AppTabScreenProps} from '@routes';

import {Screen} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;
export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectImage, setSelectImage] = useState<string>();
  const {photoList, fetchNextPage} = useCameraRoll(true, onSelectImage);

  const flatLisRef = useRef<FlatList>(null);

  function onSelectImage(imageUri: string) {
    setSelectImage(imageUri);
    flatLisRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          key={item}
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  }

  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        ref={flatLisRef}
        numColumns={NUM_COLUMNS}
        data={photoList}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imageUri={selectImage} imageWidth={SCREEN_WIDTH} />
        }
      />
    </Screen>
  );
}
