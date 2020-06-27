import React from 'react';
import CountUp from 'react-countup'; // provides animation of numbers climbing up

import { Container, Header, Body, Content, Footer } from './styles';

// properties to customize the card component and provide the data
interface Props {
    color: string;
    place: string;
    cases: number;
    date: string;
}

const Card: React.FC<Props> = ({color, cases, place, date}) => {
    return (
        <Container color={color}>
            <Header color={color}>
                <h2>Casos confirmados no {place}</h2>
            </Header>
            <Body>
                <Content>
                    <CountUp
                        start={0}
                        end={cases ? cases : 0}
                        duration={2}
                        separator=" "
                    />                  
                </Content>
            </Body>
            <Footer>
                <h3>Última atualização:</h3>
                <span>{(new Date(date)).toLocaleDateString('pt-BR')}</span>
            </Footer>
        </Container>
    );
};

export default Card;