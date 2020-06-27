import React from 'react';

import Header from './components/Header';
import Introduction from './components/Introduction';
import ShowData from './components/ShowData';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (
    <>
      <Header />

      <Introduction />

      <ShowData />

      <Footer />

      <GlobalStyles />
    </>
  );
}

export default App;
