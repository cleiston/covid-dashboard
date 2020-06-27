import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Cases } from './styles';
import Card from '../Card';
import Chart from '../Chart';

interface Country{
    Country: string;
    TotalConfirmed: number;
}

const ShowData: React.FC = () => {

    const [totalBrazilCases, setTotalBrazilCases] = useState(0);

    const [totalWorldCases, setTotalWorldCases] = useState(0);

    const [topCountryCases, setTopCountryCases] = useState<Country[]>([]);

    const [date, setDate] = useState("");

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

                console.log(topNCountries)
                setTotalBrazilCases(brazil[0].TotalConfirmed);
                setTotalWorldCases(global.TotalConfirmed);
                setTopCountryCases(topNCountries);
                setDate(lastUpdate);
            });
    }, []); 

    return (
        <Cases>
            <Card color={'var(--light-green)'} cases={totalBrazilCases} place={'Brasil'} date={date} />
            <Card color={'var(--light-pink)'} cases={totalWorldCases} place={'Mundo'} date={date} />
            <Chart color={'var(--light-purple)'} date={date} countries={topCountryCases} />
        </Cases>
    );
};

export default ShowData;