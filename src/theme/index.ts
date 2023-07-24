import { extendTheme } from '@chakra-ui/react';

import fonts from './fonts';
import colors from './colors';
import styles from './styles';
import components from './components';

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components,
});