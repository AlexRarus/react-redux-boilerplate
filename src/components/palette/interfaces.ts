export interface ITheme {
  color: string;
  background: string;
}

export type IColorWithAlter = IColor & IAlternativeColor;

export interface IColor {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IAlternativeColor {
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}
