import type { CSSProperties } from "react";
import type * as Stitches from "@stitches/react";

type TypographyVariant =
  | "body"
  | "bodyStrong"
  | "bodySmall"
  | "button"
  | "title1"
  | "title2"
  | "title3"
  | "quizTitle"
  | "quizTitleSmall"
  | "navLink";

type TypographyVariantVar = `$${TypographyVariant}`;

const rem = (px: number) => `${px / 16}rem`;

const typographyVariants: {
  [variant in TypographyVariantVar]: CSSProperties;
} = {
  $body: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.5,
    fontSize: rem(18),
    fontWeight: 400,
  },
  $bodyStrong: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.5,
    fontSize: rem(18),
    fontWeight: 600,
  },
  $bodySmall: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.4,
    fontSize: rem(14),
    fontWeight: 400,
  },
  $title1: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(64),
    fontWeight: 700,
    color: "$tertiary",
  },
  $title2: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(48),
    fontWeight: 400,
    color: "$tertiary",
  },
  $title3: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(26),
    fontWeight: 500,
    color: "$primary",
  },
  $quizTitle: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(42),
    fontWeight: 400,
    color: "$white",
  },
  $quizTitleSmall: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(32),
    fontWeight: 400,
    color: "$white",
  },
  $button: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(18),
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  $navLink: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(16),
    fontWeight: 400,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
};

export const typography = (value: TypographyVariantVar) => {
  return typographyVariants[value];
};

export const paddingVertical = (value: Stitches.PropertyValue<"padding">) => ({
  paddingTop: value,
  paddingBottom: value,
});

export const paddingHorizontal = (
  value: Stitches.PropertyValue<"padding">
) => ({
  paddingLeft: value,
  paddingRight: value,
});

export const margingHorizontal = (value: Stitches.PropertyValue<"margin">) => ({
  marginLeft: value,
  marginRight: value,
});

export const size = (value: Stitches.PropertyValue<"width">) => ({
  width: value,
  height: value,
});

export const absoluteFill = () => ({
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});

export const fixedFill = () => ({
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});

export const flexCenter = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
