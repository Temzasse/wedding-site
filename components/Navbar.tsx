import React from "react";
import { styled } from "@styles/styled";
import { CONTENT_WIDTH } from "../constants";
import { Stack } from "@components/common";

export default function Navbar() {
  return (
    <Nav>
      <Stack
        as="ul"
        axis={{ "@initial": "x", "@md": "y" }}
        spacing={{ "@initial": "none", "@md": "medium" }}
        align="center"
        justify="between"
      >
        <NavItem>
          <NavLink href="#reittiohjeet">Reittiohjeet</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#lisatietoja">Lisätietoja</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#yhteystiedot">Yhteystiedot</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#in-english">In English</NavLink>
        </NavItem>
      </Stack>
    </Nav>
  );
}

const Nav = styled("nav", {
  width: "100%",
  maxWidth: `${CONTENT_WIDTH}px`,
  margingHorizontal: "auto",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "$secondary",
  padding: "$small",
});

const NavItem = styled("li", {
  borderBottom: "1px solid transparent",

  "@md": {
    marginBottom: "column",
  },

  "&:hover": {
    borderBottom: "1px solid $tertiary",
  },
});

const NavLink = styled("a", {
  typography: "$navLink",
  textDecoration: "none",
  color: "$primary",
});
