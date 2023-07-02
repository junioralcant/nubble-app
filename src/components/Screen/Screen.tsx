import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/use-app-safe-area';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

type ScreenProps = {
  children: React.ReactNode;
  canGoBack?: boolean;
};

export function Screen({children, canGoBack = false}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && (
        <Box flexDirection="row" alignItems="center" mb="s24">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
