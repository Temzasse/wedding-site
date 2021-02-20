import { styled } from "@styles/styled";
import { themeProp } from "@styles/utils";

type Props = Omit<React.ComponentProps<typeof StyledSpacer>, "children">;

export function Spacer(props: Props) {
  return <StyledSpacer {...props} data-spacer="true" />;
}

const StyledSpacer = styled("div", {
  $$size: "$space$normal",
  flexShrink: 0,
  variants: {
    ...themeProp("size", "space", (value) => ({
      $$size: `$space${value}`,
    })),
    axis: {
      x: { width: "$$size", height: "0px" },
      y: { height: "$$size", width: "0px" },
    },
  },
  defaultVariants: {
    axis: "y",
  },
});
