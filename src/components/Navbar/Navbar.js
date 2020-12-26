import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './navbarElements'

const Navbar = ({ toggle }) => { 
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/'>
                        Quint
                    </NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='about'>About</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to ='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>     
                            <NavLinks to ='services'>Services</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to ='signup'>Sign Up</NavLinks>
                        </NavItem>  
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to= 'signin'> Sign In </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}
// https://www.youtube.com/watch?v=Nl54MJDR2p8&t=4855s&ab_channel=BrianDesign

export default Navbar 
