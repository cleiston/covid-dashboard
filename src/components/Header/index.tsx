import React, { useState } from 'react';
import { FiHome as Home, FiInfo as About, FiTrendingUp as Up } from 'react-icons/fi';
import { Container, Title, Menu, MenuItem, MenuIcon, XIcon } from './styles';

const Header: React.FC = () => {
    
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);

    return (
        <Container mobileMenu={displayMenu}>
            <Title><Up /> covid dashboard</Title>
            <Menu>
                <MenuItem href="/home"><Home /> Home </MenuItem>
                <MenuItem href="/about"><About /> About</MenuItem>                
            </Menu>
            { displayMenu ? 
                <XIcon onClick={() => setDisplayMenu(!displayMenu)} /> :
                <MenuIcon onClick={() => setDisplayMenu(!displayMenu)} />
            }
            
        </Container>
    );
};

export default Header;