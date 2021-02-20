import { styled } from "@styles/styled";
import { themeProp } from "@styles/utils";

type Props = React.ComponentProps<typeof StyledStack>;

export function Stack({ children, ...props }: Props) {
  return <StyledStack {...props}>{children}</StyledStack>;
}

const childSpacing = "& > *:not([data-spacer]) + *:not([data-spacer])";

const StyledStack = styled("div", {
  $$spacing: "$space$normal",
  display: "flex",
  variants: {
    ...themeProp("spacing", "space", (value) => ({
      $$spacing: `$space${value}`,
    })),
    axis: {
      x: {
        flexDirection: "row",
        [childSpacing]: { margin: "0 0 0 calc($$spacing * 1px)" },
      },
      y: {
        flexDirection: "column",
        [childSpacing]: { margin: "calc($$spacing * 1px) 0 0 0" },
      },
      xReverse: {
        flexDirection: "row-reverse",
        [childSpacing]: { margin: "0 calc($$spacing * 1px) 0 0" },
      },
      yReverse: {
        flexDirection: "column-reverse",
        [childSpacing]: { margin: "0 0 calc($$spacing * 1px) 0" },
      },
    },
  },
});
