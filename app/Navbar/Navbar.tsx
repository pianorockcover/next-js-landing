import React from "react";
import styled from "styled-components";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar as BsNavbar,
} from "react-bootstrap";

const NavbarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const Navbar: React.FC = () => {
  return <NavbarWrapper></NavbarWrapper>;
};
