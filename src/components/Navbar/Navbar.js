import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavContainer } from "./NavStyle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Link to="/">
            <h1>Checkpoint</h1>
          </Link>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
