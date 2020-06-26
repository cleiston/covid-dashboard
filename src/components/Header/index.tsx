import React, { useState } from 'react';
import { Container, Title, Menu, MenuItem, MenuIcon, XIcon } from './styles';

const Header: React.FC = () => {
    
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);

    return (
        <Container mobileMenu={displayMenu}>
            <Title>covid dashboard</Title>
            <Menu>
                <MenuItem href="/home">Home</MenuItem>
                <MenuItem href="/about">About</MenuItem>                
            </Menu>
            { displayMenu ? 
                <XIcon onClick={() => setDisplayMenu(!displayMenu)} /> :
                <MenuIcon onClick={() => setDisplayMenu(!displayMenu)} />
            }
            
        </Container>
    );
};

export default Header;