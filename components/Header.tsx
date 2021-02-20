import { Text } from "@components/common";

export default function Header({ title }) {
  return (
    <Text color="primaryLighter" variant="title2">
      {title}
    </Text>
  );
}
