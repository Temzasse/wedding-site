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
      x: {
        width: "calc($$size * 1px)",
        height: "0px",
      },
      y: {
        height: "calc($$size * 1px)",
        width: "0px",
      },
    },
  },
});
