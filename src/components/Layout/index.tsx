import React from 'react';

import Header from '../Header';
import Introduction from '../Introduction';
import ShowData from '../ShowData';
import Footer from '../Footer';

const Layout: React.FC = () => {
    return (
        <>
            <Header />

            <Introduction />

            <ShowData />

            <Footer />
        </>
    );
};

export default Layout;