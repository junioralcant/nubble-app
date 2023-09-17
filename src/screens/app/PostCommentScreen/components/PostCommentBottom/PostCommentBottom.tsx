import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

type Props = {
  fetchNextPage: () => void;
  hasNextPage: boolean;
};

export function PostCommentBottom({fetchNextPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text preset="headingSmall" color="primary" textAlign="center" mt="s10">
          Ver Mais
        </Text>
      </Pressable>
    );
  } else {
    return <></>;
  }
}
