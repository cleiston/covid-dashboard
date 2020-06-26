import React from 'react';
import CountUp from 'react-countup';

import { Container, Header, Body, Content, Footer } from './styles';

interface Props {
    color: string;
}

const Card: React.FC<Props> = ({color}) => {
    return (
        <Container color={color}>
            <Header color={color}>
                <h2>Casos confirmados no Brasil</h2>
            </Header>
            <Body>
                <Content>
                    <CountUp
                        start={0}
                        end={1234567}
                        duration={2}
                        separator=" "
                    />                  
                </Content>
            </Body>
            <Footer>
                <h3>Última atualização:</h3>
                <span>2/03/2020</span>
            </Footer>
        </Container>
    );
};

export default Card;