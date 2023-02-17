import breakPoints from './breakPoints';
import zIndexes from './zIndexes';

const defaultTheme = {
  colors: {
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.75)'
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F15B29',
      overlay: '#3A3A3C'
    }
  },
  breakPoints: breakPoints,
  zIndexes
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;
