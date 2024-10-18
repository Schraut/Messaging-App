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
    fontSize: 12,
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

// 12, 16, 24, 32, 48, 64, 96

export default FONTS;
