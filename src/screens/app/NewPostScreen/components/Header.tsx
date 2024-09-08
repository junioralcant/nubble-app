import React from 'react';
import {ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

type Props = {
  imageUri?: string;
  imageWidth: number;
};
export function Header({imageUri, imageWidth}: Props) {
  const navigate = useNavigation();

  function navigateToPublishPostScreen() {
    if (imageUri) {
      navigate.navigate('PublishPostScreen', {imageUri});
    }
  }

  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={{
          width: imageWidth,
          height: imageWidth,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {imageUri && (
          <Button
            onPress={navigateToPublishPostScreen}
            preset="ghost"
            title="Escolher essa"
            mb="s24"
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
};
