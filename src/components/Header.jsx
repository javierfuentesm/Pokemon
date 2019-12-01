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
          Pokemons
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <a href="" className="text-white">Pokédex</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/safari">
                <a href="" className="text-white">Safari</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/pc">
                <a href="" className="text-white">Mi PC</a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
