import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Nav tabs>
                <NavItem>
                    <NavLink className='header-links' tag={Link} to='/trails'>Trails</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='header-links' tag={Link} to='/'>Profile</NavLink>
                </NavItem>
            
            </Nav>
             
        </header>
    )
}
export default Header;