import { createStitches } from "@stitches/react";

import {
  typography,
  paddingHorizontal,
  paddingVertical,
  margingHorizontal,
  size,
  absoluteFill,
  fixedFill,
  flexCenter,
} from "./utils";

export const { styled, css, theme, globalCss, getCssText, keyframes } =
  createStitches({
    theme: {
      colors: {
        text: "#333",
        gray: "#888",
        grayLight: "#eee",
        grayLighter: "#f5f5f5",
        white: "#fff",
        primary: "hsl(133, 35%, 10%)",
        secondary: "hsl(155, 7%, 47%)",
        tertiary: "hsl(39, 56%, 46%)",
        quizMilka: "#db79ff",
        quizTeemu: "#3f9fff",
      },
      space: {
        none: "0px",
        xxsmall: "4px",
        xsmall: "8px",
        small: "12px",
        normal: "16px",
        medium: "24px",
        large: "32px",
        xlarge: "56px",
        xxlarge: "72px",
        xxxlarge: "120px",
      },
      radii: {
        small: "4px",
        normal: "8px",
        medium: "16px",
        large: "24px",
        full: "999px",
      },
    },

    utils: {
      size,
      typography,
      absoluteFill,
      fixedFill,
      flexCenter,
      paddingVertical,
      paddingHorizontal,
      margingHorizontal,
    },

    media: {
      xs: "(max-width: 374px)",
      sm: "(max-width: 640px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 1024px)",
      xl: "(min-width: 1025px)",
    },
  });
