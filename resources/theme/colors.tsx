export type ColorMode = {
  light: Colors;
  dark: Colors;
};

export type Colors = {
  background: string;
  inverseBackground: string;
  staticBlack: string;
  staticWhite: string;
  staticGrey: string;
};

const COLORS: ColorMode = {
  light: {
    background: "#FFFFFF",
    inverseBackground: "#000000",
    staticBlack: "#000000",
    staticWhite: "#FFFFFF",
    staticGrey: "#7E7E7E",
  },
  dark: {
    background: "#000000",
    inverseBackground: "#FFFFFF",
    staticBlack: "#000000",
    staticWhite: "#FFFFFF",
    staticGrey: "#7E7E7E",
  },
};

export default COLORS;
