import 'styled-components';
import { TDefaultTheme } from '../lib/theme/defaultTheme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends TDefaultTheme {}
}
