/* eslint-disable perfectionist/sort-imports */
import './index.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import { useMemo, useState } from 'react';
import { SearchContext } from './SearchContext';

// ----------------------------------------------------------------------

export default function App() {
  const [search, setSearch] = useState('');

  useScrollToTop();

  return (
    <ThemeProvider>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <SearchContext.Provider value={{ search, setSearch }}>
        <Router />
      </SearchContext.Provider>
    </ThemeProvider>
  );
}
