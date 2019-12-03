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
                <p className="text-white">Pokédex</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/safari">
                <p className="text-white">Safari</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/pc">
                <p className="text-white">Mi PC</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
