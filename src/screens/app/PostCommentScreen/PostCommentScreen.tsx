import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  IPostComment,
  PostCommentModel,
  usePostCommentCreate,
  usePostCommentList,
  usePostCommentRemove,
  useUser,
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
  const postAuthorId = route.params.postAuthorId;
  const postId = route.params.postId;
  const user = useUser();

  const {data, fetchNextPage, hasNextPage, fetchInitialData} =
    usePostCommentList(postCommentListService, postId);

  const {createComment} = usePostCommentCreate(postCommentListService, postId, {
    onSuccess: fetchInitialData,
  });

  const {mutate} = usePostCommentRemove(postCommentListService, {
    onSuccess: fetchInitialData,
  });

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostCommentModel>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={mutate}
        isAllowToDelete={postCommentListService.isAllowToDelete(
          item,
          user.id,
          postAuthorId,
        )}
      />
    );
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

        <PostCommentInputTextMessage
          createComment={createComment}
          onAddComment={fetchInitialData}
        />
      </Box>
    </Screen>
  );
}
