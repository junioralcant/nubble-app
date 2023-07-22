import React from 'react';

import {AppTabScreenProps} from '@routes';

import {Screen, Text} from '@components';

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text>New Post</Text>
    </Screen>
  );
}
