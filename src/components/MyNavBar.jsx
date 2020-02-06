import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from 'reactstrap';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleNavBar = () => setIsOpen(!isOpen);
    const closeNavBar = () => setIsOpen(false);
    const toggleDropDown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <Navbar className="navbar" expand="md" light fixed="top">
            <NavbarBrand className="navbar-name" tag={Link} to="/" onClick={closeNavBar}>aga ux</NavbarBrand>
            <NavbarToggler onClick={toggleNavBar}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <Dropdown nav inNavbar
                              isOpen={isDropdownOpen}
                              toggle={toggleDropDown}>
                        <DropdownToggle nav caret>
                            Portfolio
                        </DropdownToggle>
                        <DropdownMenu right className="sub-navbar">
                            <DropdownItem>
                                <NavLink tag={HashLink} to="/#my-portfolio" onClick={closeNavBar}>Overview</NavLink>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                <NavLink tag={Link} to="/gift-giver" onClick={closeNavBar}>Gift Giver</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink tag={Link} to="/machining" onClick={closeNavBar}>Machining</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink tag={Link} to="/ui-challenges" onClick={closeNavBar}>UI Challenges</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink tag={Link} to="/about" onClick={closeNavBar}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/resume/" onClick={closeNavBar}>Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/contact/" onClick={closeNavBar}>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
