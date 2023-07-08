import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      black: string;
      darkGray: string;
      gray: string;
      lightGray: string;
      green: string;
      lightPurple: string;
      red: string;
    };
    space: {
      fontXLarge: number;
      fontLarge: number;
      fontMain: number;
      fontMedium: number;
      fontSmall: number;
      fontXSmall: number;
      fontXXSmall: number;
      fontXXXSmall: number;

      iconXLarge: number;
      iconLarge: number;
      iconMain: number;
      iconMedium: number;
      iconSmall: number;
      iconXSmall: number;
      iconXxSmall: number;
      iconXxxSmall: number;

      borderRadius: string;
    };
    fonts: {
      regular: string;
    };
  }
}
