import type { CSSProperties } from "react";

type TypographyVariant =
  | "body"
  | "bodySmall"
  | "button"
  | "title1"
  | "title2"
  | "navLink";

type TypographyVariantVar = `$${TypographyVariant}`;

const rem = (px: number) => `${px / 16}rem`;

const leafDecoration = {
  paddingBottom: "100px",
  position: "relative",
  "&::after": {
    content: `""`,
    display: "block",
    position: "absolute",
    bottom: "0px",
    left: "-32px",
    right: "-32px",
    height: "100px",
    backgroundImage: 'url("leaf_1.png")',
    backgroundPosition: "0px 0px",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    transform: "rotate(4deg)",
    opacity: 0.5,
  },
} as any;

const typographyVariants: {
  [variant in TypographyVariantVar]: CSSProperties;
} = {
  $body: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.5,
    fontSize: rem(18),
    fontWeight: 400,
  },
  $bodySmall: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.2,
    fontSize: rem(12),
    fontWeight: 400,
  },

  $title1: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(64),
    fontWeight: 700,
    color: "$primary",
  },
  $title2: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(48),
    fontWeight: 400,
    color: "$primary",
    ...leafDecoration,
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

export const typography = () => (value: TypographyVariantVar) => {
  return typographyVariants[value];
};

export const paddingVertical = () => (value: any) => ({
  paddingTop: value,
  paddingBottom: value,
});

export const paddingHorizontal = () => (value: any) => ({
  paddingLeft: value,
  paddingRight: value,
});

export const margingHorizontal = () => (value: any) => ({
  marginLeft: value,
  marginRight: value,
});

export const size = () => (value: any) => ({
  width: value,
  height: value,
});
