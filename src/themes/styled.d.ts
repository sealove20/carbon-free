import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      black: string;
      gray: string;
      green: string;
    };
    space: {
      fontXLarge: number;
      fontLarge: number;
      fontMain: number;
      fontMedium: number;
      fontSmall: number;
      fontXSmall: number;
      fontXXSmall: number;

      iconXLarge: number;
      iconLarge: number;
      iconMain: number;
      iconMedium: number;
      iconSmall: number;
      iconXSmall: number;
      iconXxSmall: number;
      iconXxxSmall: number;
    };
    fonts: {
      regular: string;
    };
  }
}
