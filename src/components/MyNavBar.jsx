import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
} from 'reactstrap';
import {Link} from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="navbar" expand="md" light fixed="top">
            {/*<NavbarBrand className="navbar-name" tag={Link} to="/">Agnieszka Matyja</NavbarBrand>*/}
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Portfolio</NavLink>
                    </NavItem>
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
