import type { CSSProperties } from "react";

type TypographyVariant = "$body" | "$bodySmall" | "$title1" | "$title2";

const variants: { [variant in TypographyVariant]: CSSProperties } = {
  $body: {
    lineHeight: 1.4,
    fontSize: "1rem",
    fontWeight: 400,
  },
  $bodySmall: {
    lineHeight: 1.2,
    fontSize: "0.75rem",
    fontWeight: 400,
  },
  $title1: {
    lineHeight: 1,
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  $title2: {
    lineHeight: 1,
    fontSize: "1.5rem",
    fontWeight: 700,
  },
};

export default function typography(config: any) {
  return (variant: TypographyVariant) => variants[variant];
}
