import {ThemeColorsTypes} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPreset} from './Button';

type ButtonUI = {
  container: TouchableOpacityBoxProps;
  content: ThemeColorsTypes;
};

export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
};
