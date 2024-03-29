import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {motion} from 'framer-motion';
export const Nav = styled(motion.nav)`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    transition: 0.4s all ease-in;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top:0;
    z-index: 10;

    @media screen and (max-width: 800px) {
        transition: 0.4s all ease-in
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width:100%;
    padding: 0 30px; 
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
        margin-left: 5px
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate( -100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`

export const NavMenu = styled.ul` 
   display: grid;
    grid-template-columns: repeat(5, auto);
    list-style: none;
    text-decoration: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    padding-right: 20px;
    
    

    @media screen and (max-width:900px) {
        display: none
    }
`
export const NavItem = styled.li`
    height: 80px;
    padding-right: 20px;
`
 export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    

  

    &.active {
        border-bottom: 3px solid #8BC6EC;
        
    }
    
    &:hover {
        color: #8BC6EC;
        transition: all 0.3s ease-in-out;
    }
 `

export const NavBtn = styled.nav` 
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #8BC6EC;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #010606
    }
`
// #010606

