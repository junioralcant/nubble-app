import React from 'react';
import {Dimensions, Image} from 'react-native';

import {PostModel} from '@domain';

type PostImageProps = Pick<PostModel, 'imageURL'>;

export function PostImage({imageURL}: PostImageProps) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
