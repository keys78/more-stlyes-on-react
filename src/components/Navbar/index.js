import React from "react";
import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from "react";
import { Nav, NavbarContainer, NavbarLogo, MobileIcons, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }



    return ( 
        <>
        <IconContext.Provider value={{ color: '#fff'}}></IconContext.Provider>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarLogo to='/' onClick={toggleHome} >Uno</NavbarLogo>
                    <MobileIcons  onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                             smooth={true} duration={500} spy={true}
                             exact='true' offset={80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                             smooth={true} duration={500} spy={true}
                             exact='true' offset={80}
                            >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"
                         smooth={true} duration={500} spy={true}
                         exact='true' offset={80}
                        >Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
     );
}
 
export default Navbar;