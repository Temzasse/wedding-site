import React from "react";
import Img from "react-optimized-image";
import dynamic from "next/dynamic";
import { styled } from "@styles/styled";
import { Stack, Text } from "@components/common";
import logoWhiteImg from "../images/logo_white.png";

const Snowfall = dynamic(() => import("./Snowfall"), {
  ssr: false,
});

export default function Footer() {
  const [snowing, setSnowing] = React.useState(false);

  return (
    <Wrapper>
      <Stack spacing="large" align="center" justify="center">
        <Img
          src={logoWhiteImg}
          alt="Teemun ja Milkan alkukirjaimet"
          width={120}
          height={120}
          webp
        />

        <CheckboxLabel>
          <Text variant="body" color="white">
            ❄️❄️❄️?
          </Text>

          <CheckboxInput
            required
            name="attending"
            type="checkbox"
            value="yes"
            checked={snowing}
            onChange={() => setSnowing((p) => !p)}
          />

          <CheckboxMark checked={snowing} />
        </CheckboxLabel>
      </Stack>

      {snowing && <Snowfall />}
    </Wrapper>
  );
}

const Wrapper = styled("footer", {
  width: "100%",
  minHeight: "300px",
  backgroundColor: "$secondary",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CheckboxLabel = styled("label", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  paddingLeft: "32px",
});

const CheckboxMark = styled("span", {
  position: "absolute",
  display: "inline-block",
  top: "0px",
  left: "0px",
  height: "24px",
  width: "24px",
  borderRadius: "2px",

  "&::after": {
    content: `""`,
    position: "absolute",
    opacity: 0,
    left: "8px",
    top: "3px",
    width: "6px",
    height: "12px",
    border: "solid white",
    borderWidth: "0px 2px 2px 0px",
    transform: "rotate(45deg)",
  },

  variants: {
    checked: {
      false: {
        backgroundColor: "$white",
      },
      true: {
        backgroundColor: "$primary",
        "&::after": {
          opacity: 1,
        },
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const CheckboxInput = styled("input", {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  margin: "0px",
  opacity: "0",
  zIndex: 1,
  cursor: "pointer",
});
