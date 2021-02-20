import { styled } from "@styles/styled";
import { Text, Stack } from "@components/common";

export default function Header({ title }) {
  return (
    <Stack axis="y" spacing="medium" align="center" css={{ padding: "$large" }}>
      <Text variant="title1" color="primaryLight">
        {title}
      </Text>

      <Text variant="title2" color="primaryLighter">
        Title 2
      </Text>

      <div>
        <Stack axis="x" spacing="normal" wrap css={{ maxWidth: 400 }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <Box key={i} />
          ))}
        </Stack>
      </div>
    </Stack>
  );
}

const Box = styled("div", {
  flexGrow: 1,
  flexBasis: "100px",
  height: "100px",
  background: "$primaryLighter",
  borderRadius: "$normal",
});
