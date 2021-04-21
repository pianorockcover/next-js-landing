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
  return (
    <NavbarWrapper>
      <BsNavbar bg="primary" variant="dark">
        <BsNavbar.Brand href="#home">BsNavbar</BsNavbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </BsNavbar>
    </NavbarWrapper>
  );
};
