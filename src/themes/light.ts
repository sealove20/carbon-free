import {type DefaultTheme} from 'styled-components';

import colors from './colors';
import sizes from './sizes';

const light: DefaultTheme = {
  colors: {
    ...colors,
  },
  space: {
    ...sizes,
  },
};

export {light};
