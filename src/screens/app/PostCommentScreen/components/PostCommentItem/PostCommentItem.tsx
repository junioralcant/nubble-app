import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostCommentModel} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = {
  postComment: PostCommentModel;
  removeComment: (variable: {postCommentId: number}) => Promise<void>;
};
export function PostCommentItem({postComment, removeComment}: Props) {
  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário ?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => removeComment({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileUrl} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
