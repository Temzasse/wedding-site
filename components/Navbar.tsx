import React from "react";
import { styled } from "@styles/styled";
import { CONTENT_WIDTH } from "../constants";

export default function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink href="#ilmottaudu">Ilmoittaudu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#reittiohjeet">Reittiohjeet</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#lisatietoja">Lisätietoja</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#yhteystiedot">Yhteystiedot</NavLink>
        </NavItem>
      </NavList>
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

const NavList = styled("ul", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const NavItem = styled("li", {
  borderBottom: "1px solid transparent",
  "&:hover": {
    borderBottom: "1px solid $tertiary",
  },
});

const NavLink = styled("a", {
  typography: "$navLink",
  textDecoration: "none",
  color: "$primary",
});
