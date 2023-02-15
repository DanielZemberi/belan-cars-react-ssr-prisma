import breakPoints from './breakPoints';
import zIndexes from './zIndexes';

const defaultTheme = {
  colors: {
    text: {
      primary: '#000000',
      secondary: '#F15B29'
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F15B29'
    }
  },
  breakPoints: breakPoints,
  zIndexes
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;
