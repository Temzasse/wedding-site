import { Text, Stack, Spacer } from "@components/common";

export default function Header({ title }) {
  return (
    <Stack axis={{ initial: "y", sm: "x" }} spacing="normal">
      <Text color="primaryLight" variant="title1">
        {title}
      </Text>

      <Text color="primaryLighter" variant="title2">
        Title 2
      </Text>
    </Stack>
  );
}
