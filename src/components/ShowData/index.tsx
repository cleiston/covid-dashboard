import React from 'react';

import { Cases } from './styles';
import Card from '../Card';
import Chart from '../Chart';

const ShowData: React.FC = () => {
    return (
        <Cases>
            <Card color={'var(--light-green)'} />
            <Card color={'var(--light-pink)'} />
            <Chart color={'var(--light-purple)'} />
        </Cases>
    );
};

export default ShowData;