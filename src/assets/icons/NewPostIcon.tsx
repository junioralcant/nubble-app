import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBaseTypes} from '../../components/Icon/Icon';

export function NewPostIcon({size = 20, color = 'black'}: IconBaseTypes) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM1.41021 10C1.41021 5.25599 5.25599 1.41021 10 1.41021C14.744 1.41021 18.5898 5.25599 18.5898 10C18.5898 14.744 14.744 18.5898 10 18.5898C5.25599 18.5898 1.41021 14.744 1.41021 10ZM10.7052 6.28204C10.7052 5.89262 10.3895 5.57693 10 5.57693C9.61063 5.57693 9.29494 5.89262 9.29494 6.28204V9.29489H6.28209C5.89267 9.29489 5.57699 9.61058 5.57699 10C5.57699 10.3894 5.89267 10.7051 6.28209 10.7051H9.29494V13.718C9.29494 14.1074 9.61063 14.4231 10 14.4231C10.3895 14.4231 10.7052 14.1074 10.7052 13.718V10.7051H13.718C14.1074 10.7051 14.4231 10.3894 14.4231 10C14.4231 9.61058 14.1074 9.29489 13.718 9.29489H10.7052V6.28204Z"
      />
    </Svg>
  );
}
