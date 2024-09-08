import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {AppScreenProps} from '@routes';

import {Button, Screen, Text, TextInput} from '@components';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');
  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: route.params.imageUri,
        }}
        style={{width: IMAGE_WIDTH, height: IMAGE_WIDTH, alignSelf: 'center'}}
      />

      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui..."
        containerProps={{
          borderWidth: 0,
        }}
      />

      <Button mt="s56" title="Publicar post" />
    </Screen>
  );
}
