import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {PostCommentModel} from '@domain';

import {TextInputMessage} from '@components';

type Props = {
  createComment: (message: string) => Promise<PostCommentModel> | undefined;
};

export function PostCommentInputTextMessage({createComment}: Props) {
  const [message, setMessage] = useState('');

  function onPressSend() {
    createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextInputMessage
      placeholder="Adicione um comentário"
      value={message}
      onChangeText={setMessage}
      onPressSend={onPressSend}
    />
  );
}
