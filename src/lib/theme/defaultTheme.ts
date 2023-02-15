import breakPoints from './breakPoints';
import zIndexes from './zIndexes';

const defaultTheme = {
  colors: {
    text: {
      primary: '#000000',
      secondary: '#FFFFFF'
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#000000'
    }
  },
  breakPoints: breakPoints,
  zIndexes
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;
