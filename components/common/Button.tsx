import { styled } from "@styles/styled";

export const Button = styled("button", {
  paddingVertical: "$normal",
  paddingHorizontal: "$large",
  typography: "$button",

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
