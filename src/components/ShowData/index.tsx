import React, { useState, useEffect } from 'react';
import api from '../../services/api'; // connects to COVID-19 API

import { Cases } from './styles';
import Card from '../Card';
import Chart from '../Chart';

// Fields that will be used
interface Country{
    Country: string;
    TotalConfirmed: number;
}

// this component displays the data from API
// It uses the Card and Chart components to display Brazillian and World cases

const ShowData: React.FC = () => {

    const [totalBrazilCases, setTotalBrazilCases] = useState(0);

    const [totalWorldCases, setTotalWorldCases] = useState(0);

    const [topCountryCases, setTopCountryCases] = useState<Country[]>([]);

    const [date, setDate] = useState(""); // last update

    useEffect(() => {
        api.get('summary')
            .then(response => {
                const allCountries = response.data.Countries;
                const brazil = allCountries.filter((country: Country) => country.Country === 'Brazil');
                const global = response.data.Global;
                const lastUpdate = response.data.Date;

                // get top 5 countries
                const sortedDescCountries = allCountries.sort((a: Country, b: Country) => {
                    return b.TotalConfirmed - a.TotalConfirmed;
                });      
                const topNCountries = sortedDescCountries.slice(0, 5);

                setTotalBrazilCases(brazil[0].TotalConfirmed);
                setTotalWorldCases(global.TotalConfirmed);
                setTopCountryCases(topNCountries);
                setDate(lastUpdate);
            });
    }, []);  // this function will be load only once (empty brackets)

    return (
        <Cases>
            <Card color={'var(--light-green)'} cases={totalBrazilCases} place={'Brasil'} date={date} />
            <Card color={'var(--light-pink)'} cases={totalWorldCases} place={'Mundo'} date={date} />
            <Chart color={'var(--light-purple)'} date={date} countries={topCountryCases} />
        </Cases>
    );
};

export default ShowData;