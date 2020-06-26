import React from 'react';

import { Container, Window, Message, Title, Text } from './styles';

const Introduction: React.FC = () => {
    return (
        <Container>
            <Window>
                <Message>
                    <Title>COVID-19</Title>
                    <Text>
                        A doença é causada pelo coronavírus SARS-CoV-2, 
                        e apresenta um quadro clínico que varia de infecções assintomáticas 
                        a quadros respiratórios graves. A maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos e 
                        cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem 
                        dificuldade respiratória. Aproximadamente 5% podem necessitar de suporte 
                        para o tratamento de insuficiência respiratória.
                    </Text>
                    <Text>
                        A seguir são apresentados os números oficiais da COVID-19 pelo Brasil e no mundo.
                    </Text>
                </Message>
            </Window>
        </Container>
    );
};

export default Introduction;