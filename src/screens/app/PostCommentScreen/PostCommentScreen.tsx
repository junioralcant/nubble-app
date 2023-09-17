import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  IPostComment,
  PostCommentModel,
  usePostCommentCreate,
  usePostCommentList,
} from '@domain';

import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {Box, Screen} from '@components';

import {PostCommentBottom} from './components/PostCommentBottom/PostCommentBottom';
import {PostCommentInputTextMessage} from './components/PostCommentInputTextMessage/PostCommentInputTextMessage';
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

  const {createComment} = usePostCommentCreate(postCommentListService, postId);

  const {bottom} = useAppSafeArea();

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

        <PostCommentInputTextMessage createComment={createComment} />
      </Box>
    </Screen>
  );
}
