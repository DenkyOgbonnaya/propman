import React, {useState} from 'react';
import {useGlobal} from 'reactn';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {NavLink as RRNavLink } from 'react-router-dom';
  import {logout} from './auth/dataProvider';

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[userData] = useGlobal('userData');

  const logout = () => {
    const{userId, authToken} = userData;
    logout({userId, authToken});
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">PropMan</NavbarBrand>
        <NavbarToggler onClick={ () => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                {
                  !userData.authToken ? '' :
                  <NavLink to= '/' tag= {RRNavLink} onClick= { () => logout()} >Logout</NavLink>
                }
              
            </NavItem> 
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;