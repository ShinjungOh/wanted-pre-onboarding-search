import React from 'react';
import { Page } from './ui/components/layout';
import GlobalStyles from './ui/core/GlobalStyles';
import SearchPage from './ui/pages/SearchPage';
import NavBar from './ui/components/navbar/NavBar';

const App = () => (
  <>
    <NavBar />
    <Page>
      <SearchPage />
    </Page>
    <GlobalStyles />
  </>
);

export default App;
