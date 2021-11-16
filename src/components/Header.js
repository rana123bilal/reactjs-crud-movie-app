import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="dark" expand="md" dark container>
      <NavbarBrand tag={Link} to="/">
        MovieApp
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/admin">
              Admin
            </NavLink>
          </NavItem>
        </Nav>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input type="search" placeholder="Film ara" />
        </Form>
      </Collapse>
    </Navbar>
  );
};

export default Header;
