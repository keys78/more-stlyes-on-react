import React from "react";
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavbarLogo, MobileIcons, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return ( 
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to='/'>Uno</NavbarLogo>
                    <MobileIcons  onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
     );
}
 
export default Navbar;