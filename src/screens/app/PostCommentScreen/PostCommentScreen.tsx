import React from 'react';

import {AppScreenProps} from '@routes';

import {Box, Screen, Text} from '@components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  console.log(route);

  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Telas de comentários</Text>
      </Box>
    </Screen>
  );
}
