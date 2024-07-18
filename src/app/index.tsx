import { Header, Hero, Layout, SearchContext } from '@themovie/base';
import { Home } from './home';
import { useState } from 'react';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Layout>
      <SearchContext.Provider value={{ value: searchValue, setValue: setSearchValue }}>
        <Header />
        <Hero />
        <Home />
      </SearchContext.Provider>
    </Layout>
  );
}
