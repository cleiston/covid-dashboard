import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2'; // JS library to display data through charts
import { Container, Header, Body, Footer } from './styles';

// Define the data fields allowed to be used here 
interface Country{
  Country: string;
  TotalConfirmed: number;
}

// Define the fields that this Component will receive from its parent
interface Props {
    color: string;
    date: string;
    countries: Country[];
}

const Chart: React.FC<Props> = ({color, date, countries}) => {

    const [topCountries, setTopCountries] = useState({});

    useEffect(() => {
      const countryNames = countries.map(country => country.Country);
      const countryNumbers = countries.map(country => 
                                country.TotalConfirmed/1000000); // return numbers in milions (M)
                                                                 // more compact representation

      const data = {
        labels: countryNames,
        datasets: [
          {
            label: 'Casos de COVID-19 em milhões (M)',
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

    }, [countries]); // this function executes everytime the countries variable changes (data from API)

    return (
      <Container color={color}>
        <Header color={color}>Ranking dos países com maior número de casos</Header>
        <Body>
            <HorizontalBar data={topCountries} />
        </Body>
        <Footer>Atualizado em {(new Date(date)).toLocaleDateString('pt-BR')}</Footer>
      </Container>
    );
};

export default Chart;