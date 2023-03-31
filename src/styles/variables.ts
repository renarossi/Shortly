import { keyframes } from '@emotion/react';

export const Colors = {
    primary: {
        white: '#fff',
        darkGray: '#a9a9a9',
        lightBlue: '#dff6ff',
        darkBlue: '#06283D',
        darkRed: '#A30000'
    }
};

export const Spaces = {
    zero: '0',
    xxSmall: '2px',
    xSmall: '6px',
    small: '12px',
    medium: '24px',
    mLarge: '32px',
    large: '48px',
    xLarge: '64px'
};

export const FontSizes = {
    xSmall: '12px',
    mSmall: '16px',
    medium: '20px',
    mLarge: '22px',
    large: '70px'
};

export const FontWeight = {
    regular: 400,
    bold: 500,
    extraBold: 700
};

export const SpinEffect = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
