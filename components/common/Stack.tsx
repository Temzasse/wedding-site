import { styled } from "@styles/styled";
import { themeProp } from "@styles/utils";

const childSpacing = "& > *:not([data-spacer]) + *:not([data-spacer])";

export const Stack = styled("div", {
  $$spacing: "$space$normal",
  display: "flex",
  variants: {
    ...themeProp("spacing", "space", (value) => ({
      $$spacing: `$space${value}`,
    })),
    axis: {
      x: {
        flexDirection: "row",
        [childSpacing]: { margin: "0 0 0 $$spacing" },
      },
      y: {
        flexDirection: "column",
        [childSpacing]: { margin: "$$spacing 0 0 0" },
      },
      xReverse: {
        flexDirection: "row-reverse",
        [childSpacing]: { margin: "0 $$spacing 0 0" },
      },
      yReverse: {
        flexDirection: "column-reverse",
        [childSpacing]: { margin: "0 0 $$spacing 0" },
      },
    },
    align: {
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      center: { alignItems: "center" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      stretch: { justifyContent: "stretch" },
      around: { justifyContent: "space-around" },
      between: { justifyContent: "space-between" },
      evenly: { justifyContent: "space-evenly" },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
        margin: "calc($$spacing / -2)",
        "> *": { margin: "calc($$spacing / 2) !important" },
      },
    },
  },
});
