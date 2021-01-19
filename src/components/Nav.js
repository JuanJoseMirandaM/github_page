import React, {useState} from 'react'
import {Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Navbar color="dark" dark expand="md">
      <div className="container">
        <NavbarBrand tag={Link} to="/" className="mr-auto">
          <i className="fab fa-github"></i> Github
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/user">Usuarios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/repository">Repositorios</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default NavComponent