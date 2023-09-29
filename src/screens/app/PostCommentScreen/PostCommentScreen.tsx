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
import {useToastService} from '@services';

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
  const {showToast} = useToastService();

  const {list, fetchNextPage, hasNextPage, refresh} = usePostCommentList(
    postCommentListService,
    postId,
  );

  const {createComment} = usePostCommentCreate(postCommentListService, postId);

  const {removeComment} = usePostCommentRemove(postId, postCommentListService, {
    onSuccess: () => {
      refresh();
      showToast({
        message: 'Cometário deletado',
        duration: 3000,
        position: 'top',
        type: 'error',
      });
    },
  });

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostCommentModel>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={removeComment}
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
          data={list}
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
          onAddComment={refresh}
        />
      </Box>
    </Screen>
  );
}
