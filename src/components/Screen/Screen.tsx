import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '@components';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {ScreenHeader} from './components/ScreenHeader';

export type ScreenProps = {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  HeaderComponent?: React.ReactNode;
} & BoxProps;

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

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
          <ScreenHeader
            HeaderComponent={HeaderComponent}
            title={title}
            canGoBack={canGoBack}
          />

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
