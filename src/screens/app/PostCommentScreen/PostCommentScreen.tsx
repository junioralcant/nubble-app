import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {IPostComment, PostCommentModel, usePostCommentList} from '@domain';

import {AppScreenProps} from '@routes';

import {Screen} from '@components';

import {PostCommentItem} from './components/PostCommentItem/PostCommentItem';

type PostCommentScreenProps = {
  postCommentListService: IPostComment;
} & AppScreenProps<'PostCommentScreen'>;

export function PostCommentScreen({
  postCommentListService,
  route,
}: PostCommentScreenProps) {
  const postId = route.params.postId;

  const {data} = usePostCommentList(postCommentListService, postId);

  function renderItem({item}: ListRenderItemInfo<PostCommentModel>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentários">
      <FlatList data={data} renderItem={renderItem} />
    </Screen>
  );
}
