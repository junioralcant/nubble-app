import {useTheme} from '@shopify/restyle';

import {ThemeTypes} from '../theme/theme';

export function useAppTheme() {
  return useTheme<ThemeTypes>();
}
