import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#8BC6EC' : '#8BC6EC')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#8BC6EC')};
        color: ${({colorBt}) => (colorBt ? '#8BC6EC': '#010606')}
        
    }

`


export const Button2 = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#8BC6EC' : '#8BC6EC')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#8BC6EC')};
        color: ${({colorBt}) => (colorBt ? '#8BC6EC': '#010606')}
        
    }

`
 