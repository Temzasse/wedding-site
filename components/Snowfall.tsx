import React from "react";
import SnowfallCanvas from "react-snowfall";
import { styled } from "@styles/styled";

export default function Snowfall() {
  return (
    <Wrapper>
      <SnowfallCanvas />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  absoluteFill: true,
  position: "fixed",
  pointerEvents: "none",
});
