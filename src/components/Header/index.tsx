import React, { useState } from 'react';
import { FiHome as Home, FiInfo as About, FiTrendingUp as Up } from 'react-icons/fi'; // Feather Icons
import { Container, Title, Menu, MenuItem, MenuIcon, XIcon } from './styles'; // React Components created with styled components

// Header of the website
const Header: React.FC = () => {
    
    // this state will be used to toggle the navigation bar (for mobile devices, below 600px width)
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);

    function handleToggle(){
        setDisplayMenu(prevState => !prevState);
    }

    return (
        <Container mobileMenu={displayMenu} onBlur={handleToggle}>
            <Title><Up /> covid dashboard</Title>
            <Menu>
                <MenuItem href="/"><Home /> Home </MenuItem>
                <MenuItem href="#about"><About /> About</MenuItem>                
            </Menu>
            { displayMenu ? 
                <XIcon onClick={handleToggle} /> :
                <MenuIcon onClick={handleToggle} />
            }
            
        </Container>
    );
};

export default Header;