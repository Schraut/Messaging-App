export type FontType = {
  fontFamily: string;
  fontWeight:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  fontSize: number;
};

export type Font = {
  header: FontType;
  buttonSmallText: FontType;
  textPrimary: FontType;
  textSecondary: FontType;
};

const FONTS: Font = {
  textPrimary: {
    fontFamily: "System",
    fontWeight: "400",
    fontSize: 10,
  },
  textSecondary: {
    fontFamily: "System",
    fontWeight: "400",
    fontSize: 16,
  },
  buttonSmallText: {
    fontFamily: "System",
    fontWeight: "500",
    fontSize: 13,
  },
  header: {
    fontFamily: "System",
    fontWeight: "600",
    fontSize: 24,
  },
};

export default FONTS;
