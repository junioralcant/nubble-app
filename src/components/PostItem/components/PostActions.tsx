import React from 'react';

import {PostModel} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  PostModel,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;
export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        iconName={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
        onPress={() => {}}
      />

      <Item
        iconName={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
        onPress={() => {}}
      />

      <Item
        iconName={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
        onPress={() => {}}
      />
    </Box>
  );
}

type ItemProps = {
  onPress: () => void;
  marked?: boolean;
  iconName: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
};

function Item({onPress, iconName, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        name={marked ? iconName.marked : iconName.default}
        color={marked ? 'market' : undefined}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
