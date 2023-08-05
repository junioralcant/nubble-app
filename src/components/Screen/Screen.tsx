import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {TouchableOpacityBox, Box, Icon, Text, BoxProps} from '@components';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

type ScreenProps = {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
} & BoxProps;

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox
              flexDirection="row"
              alignItems="center"
              mb="s24"
              onPress={navigation.goBack}>
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
