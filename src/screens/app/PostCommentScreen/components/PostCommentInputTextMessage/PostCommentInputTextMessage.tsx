import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextInputMessage} from '@components';

type Props = {
  createComment: (message: string) => Promise<void>;
  onAddComment: () => void;
};

export function PostCommentInputTextMessage({
  createComment,
  onAddComment,
}: Props) {
  const [message, setMessage] = useState('');

  async function onPressSend() {
    await createComment(message);
    onAddComment();
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
