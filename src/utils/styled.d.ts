// import original module declarations
import "styled-components";

type colorType = {
  lightest?: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker?: string;
};

type spacingInput = string | number;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    //  spacing
    space: (any) => string;

    paddingInlineStart: (any) => string;
    paddingInlineEnd: (any) => string;

    marginInlineStart: (any) => string;
    marginInlineEnd: (any) => string;

    padding: (...spacingInput) => string;
    margin: (...spacingInput) => string;

    //  styles
    fonts: {
      normal: string;
      faNum?: string;
    };

    borderRadius: {
      inside: string;
      normal: string;
      outside: string;
      outsider: string;
    };

    responsive: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    colors: {
      primary: colorType;
      secondary?: colorType;

      info: colorType;
      error: colorType;
      success: colorType;
      warning: colorType;

      overlay: {
        main: string;
        light: string;
        lighter: string;
      };

      grey: string[];
    };

    //   other
    terms:
      | {
          [key: string]: any;
        }
      | {};

    shadows: string[] | [];
  }
}
