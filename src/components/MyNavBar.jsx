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

    const toggle = () => setIsOpen(!isOpen);
    const toggleDropDown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <Navbar className="navbar" expand="md" light fixed="top">
            <NavbarBrand className="navbar-name" tag={Link} to="/">aga ux</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <Dropdown nav inNavbar
                              isOpen={isDropdownOpen}
                              toggle={toggleDropDown}>
                        <DropdownToggle nav caret>
                            Portfolio
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink tag={HashLink} to="/#my-portfolio">Overview</NavLink>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                <NavLink tag={Link} to="/gift-giver">Gift Giver</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink tag={Link} to="/ui-challenges">UI Challenges</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink tag={Link} to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/resume/">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/contact/">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
