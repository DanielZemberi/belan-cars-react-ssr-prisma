import breakPoints from './breakPoints';
import zIndexes from './zIndexes';

const defaultTheme = {
  colors: {
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.75)',
      tertiary: '#F15B29'
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F15B29',
      overlay: '#3A3A3C',
      darkOverlay: 'rgba(0,0,0,0.65)'
    }
  },
  breakPoints: breakPoints,
  zIndexes
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;
