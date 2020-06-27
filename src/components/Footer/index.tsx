import React from 'react';
import { FiMail, FiLinkedin, FiFacebook, FiInstagram, FiPhone, FiExternalLink, FiTrendingUp as Up } from 'react-icons/fi';

import { Container, Item, Title, AdditionalInfo, Contact } from './styles';

const Footer: React.FC = () => {
    return (
            <Container>
                <Item>
                    <Title><Up /> covid dashboard</Title>
                </Item>
                <Item>
                    <AdditionalInfo>
                        <Title>Informe-se sobre a COVID-19</Title>
                        <ul>
                            <li>
                                <a href="https://www.who.int/home"><FiExternalLink/> Organização Mundial da Saúde</a>
                            </li>
                            <li>
                                <a href="https://covid.saude.gov.br/"><FiExternalLink/> Painel Coronavirus</a>
                            </li>
                            <li>
                                <a href="http://coronavirus.saude.mg.gov.br/"><FiExternalLink/> Secretaria de Estado e Saúde</a>
                            </li>
                        </ul>
                    </AdditionalInfo>
                </Item>
                <Item>
                    <Contact>
                        <Title>Contato</Title>
                        <ul>
                            <li>
                                <a href="mailto:cleistonrs@gmail.com"> <FiMail /> </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/cleiston-rodrigues-89700967/"> <FiLinkedin /> </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/cleistonrs/"> <FiFacebook /> </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/cleistonrs/"> <FiInstagram /> </a>
                            </li>
                            <li>
                                <a href="tel:+5532991168369"> <FiPhone /> </a>
                            </li>
                        </ul>
                    </Contact>
                </Item>
            </Container>
    );
};

export default Footer;