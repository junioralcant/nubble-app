import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {IPostComment, PostCommentModel, usePostCommentList} from '@domain';

import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {Screen} from '@components';

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

  function renderItem({item}: ListRenderItemInfo<PostCommentModel>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentários">
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
    </Screen>
  );
}
