import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/use-app-safe-area';

type ScreenProps = {
  children: React.ReactNode;
};

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  );
}
