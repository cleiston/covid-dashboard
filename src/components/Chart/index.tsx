import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { Container, Header, Body, Footer } from './styles';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Casos de covid',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [90, 87, 80, 65, 56]
    }
  ]
};

interface Props {
    color: string;
}

const Chart: React.FC<Props> = ({color}) => {

    return (
      <Container color={color}>
        <Header color={color}>Ranking dos paíse com maior número de casos</Header>
        <Body>
            <HorizontalBar data={data} />
        </Body>
        <Footer>Atualizado em 31/03/2222</Footer>
      </Container>
    );
};

export default Chart;