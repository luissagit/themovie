import { createContext } from 'react';

export const SearchContext = createContext({
  value: '',
  setValue(value: any) {
    console.log(value);
  },
});
