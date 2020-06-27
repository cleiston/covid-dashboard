import React, {useState, useEffect} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { Container, Header, Body, Footer } from './styles';

interface Country{
  Country: string;
  TotalConfirmed: number;
}

interface Props {
    color: string;
    date: string;
    countries: Country[];
}

const Chart: React.FC<Props> = ({color, date, countries}) => {

    const [topCountries, setTopCountries] = useState({});

    useEffect(() => {
      const countryNames = countries.map(country => country.Country);
      const countryNumbers = countries.map(country => country.TotalConfirmed);

      const data = {
        labels: countryNames,
        datasets: [
          {
            label: 'Casos de covid',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: countryNumbers
          }
        ]
      };

      setTopCountries(data);

    }, [countries]);

    return (
      <Container color={color}>
        <Header color={color}>Ranking dos paíse com maior número de casos</Header>
        <Body>
            <HorizontalBar data={topCountries} />
        </Body>
        <Footer>Atualizado em {(new Date(date)).toLocaleDateString('pt-BR')}</Footer>
      </Container>
    );
};

export default Chart;