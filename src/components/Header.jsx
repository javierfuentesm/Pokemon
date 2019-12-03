/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="danger" variant="light" expand="lg">
        <NavbarBrand className="text-white ; mr-auto" href="/">
          Pokémons
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="bg-info" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <a className="text-white">Pokédex</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/safari">
                <a className="text-white">Safari</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/pc">
                <a className="text-white">Mi PC</a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
