import { styled } from "@styles/styled";

export const Button = styled("button", {
  typography: "$button",
  cursor: "pointer",
  position: "relative",
  paddingVertical: "$normal",
  paddingHorizontal: "$large",
  borderRadius: "2px",
  textDecoration: "none",

  "&:after": {
    content: `""`,
    absoluteFill: true,
    backgroundColor: "rgba(0,0,0,0.1)",
    opacity: 0,
    pointerEvents: "none",
  },

  "&:hover": {
    "&:after": {
      opacity: 1,
    },
  },

  "&:active": {
    "&:after": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },

  variants: {
    variant: {
      fill: {
        backgroundColor: "$secondary",
        border: "1px solid $secondary",
        color: "$white",
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid $secondary",
        color: "$secondary",
      },
      outlineLight: {
        backgroundColor: "transparent",
        border: "1px solid $white",
        color: "$white",
      },
    },
  },
  defaultVariants: {
    variant: "fill",
  },
});
