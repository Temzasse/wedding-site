import { createCss } from "@stitches/react";
import typography from "./typography";

export const { styled, css, theme, global, getCssString } = createCss({
  theme: {
    fonts: {
      $system: "system-ui",
    },
    colors: {
      text: "#222",
      primary: "hsl(133, 35%, 10%)",
      primaryLight: "hsl(133, 35%, 30%)",
      primaryLighter: "hsl(133, 35%, 70%)",
      primaryLightest: "hsl(133, 35%, 90%)",
      secondary: "hsl(40, 75%, 50%)",
      secondaryLight: "hsl(40, 75%, 70%)",
      secondaryLighter: "hsl(40, 75%, 80%)",
      secondaryLightest: "hsl(40, 75%, 90%)",
      tertiary: "hsl(359, 70%, 50%)",
      tertiaryLight: "hsl(359, 70%, 65%)",
      tertiaryLighter: "hsl(359, 70%, 80%)",
      tertiaryLightest: "hsl(359, 70%, 90%)",
    },
    space: {
      xxsmall: 4,
      xsmall: 8,
      small: 12,
      normal: 16,
      medium: 24,
      large: 32,
      xlarge: 48,
      xxlarge: 64,
    },
    radii: {
      small: 4,
      normal: 8,
      medium: 16,
      large: 24,
      full: 999,
    },
  },

  utils: {
    // @ts-ignore
    typography,
  },

  conditions: {
    sm: "@media (max-width: 640px)",
    md: "@media (max-width: 768px)",
    lg: "@media (max-width: 1024px)",
    xl: "@media (min-width: 1025px)",
  },
});
