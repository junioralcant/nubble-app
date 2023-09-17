import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {IPostComment, PostCommentModel, usePostCommentList} from '@domain';

import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {Box, Screen, TextInputMessage} from '@components';

import {PostCommentBottom} from './components/PostCommentBottom/PostCommentBottom';
import {PostCommentItem} from './components/PostCommentItem/PostCommentItem';

type PostCommentScreenProps = {
  postCommentListService: IPostComment;
} & AppScreenProps<'PostCommentScreen'>;

export function PostCommentScreen({
  postCommentListService,
  route,
}: PostCommentScreenProps) {
  const postId = route.params.postId;

  const {data, fetchNextPage, hasNextPage} = usePostCommentList(
    postCommentListService,
    postId,
  );

  const {bottom} = useAppSafeArea();
  const [message, setMessage] = useState('');

  function renderItem({item}: ListRenderItemInfo<PostCommentModel>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} canGoBack title="Comentários">
      <Box flex={1} justifyContent="space-between">
        <FlatList
          contentContainerStyle={{paddingBottom: bottom}}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />

        <TextInputMessage
          placeholder="Adicione um comentário"
          value={message}
          onChangeText={setMessage}
          onPressSend={() => console.log()}
        />
      </Box>
    </Screen>
  );
}
