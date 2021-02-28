import { styled } from "@styles/styled";
import { themeProp } from "@styles/helpers";

type Props = React.ComponentProps<typeof StyledText> & {
  as?: any;
};

export function Text({ children, ...props }: Props) {
  const variant =
    (typeof props.variant === "object"
      ? props.variant.initial
      : props.variant) || "body";

  const asTag = props.as || variantToTag[variant];

  return (
    <StyledText {...props} as={asTag}>
      {children}
    </StyledText>
  );
}

const variantToTag = {
  body: "p",
  bodySmall: "p",
  title1: "h1",
  title2: "h2",
};

const StyledText = styled("p", {
  maxWidth: "70ch",
  margin: "0px",
  color: "$text",
  variants: {
    ...themeProp("color", "colors", (value) => ({
      color: value,
    })),
    variant: {
      body: { typography: "$body" },
      bodySmall: { typography: "$bodySmall" },
      title1: { typography: "$title1" },
      title2: { typography: "$title2" },
    },
    align: {
      left: { textAlign: "left" },
      right: { textAlign: "right" },
      center: { textAlign: "center" },
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
