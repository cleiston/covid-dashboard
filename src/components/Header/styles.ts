import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

interface Props{
    mobileMenu?: boolean;
}
export const Container = styled.div<Props>`
    width: 100%;
    height: 70px;
    background-color: var(--header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
    position: relative;
    flex-wrap: wrap;

    // mobile version
    @media(max-width: 600px) {
        
        height: 100%;

        & > h1 {
            margin: 15px;
            width: 100%;
        }

        & > div {
            display: flex;
            flex-direction: column;
            margin: 10px;
            display: ${props => props.mobileMenu? 'true' : 'none'};
        }

        & > a{
            padding: 15px;
        }
    }
`;

export const MenuIcon = styled(FiMenu)`
    font-size: 24px;
    color: var(--white);
    cursor: pointer;
    position: absolute;
    top: calc(0% + 15px);
    right: calc(0% + 15px);
    display: none;

    @media(max-width: 600px) {
        display: block;
    }
    
`;

export const XIcon = styled(FiX)`
    font-size: 24px;
    color: var(--white);
    cursor: pointer;
    position: absolute;
    top: calc(0% + 15px);
    right: calc(0% + 15px);
    display: none;

    @media(max-width: 600px) {
        display: block;
    }
    
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 20px;
    text-transform: uppercase;
`;

export const Menu = styled.div`
    display: flex;
    padding: 0 10px;
`;

export const MenuItem = styled.a`
    padding: 0 10px;
    text-transform: uppercase;
    color: var(--white);
    font-weight: bold;
    text-decoration: none;
    margin: 5px 0;
    
    &:hover {
        color: var(--link);
    }
`;