import { useDebouncedCallback } from 'use-debounce';
import styles from './search.module.less';
import { useContext } from 'react';
import { SearchContext } from '@themovie/base';

export function Search() {
  const search = useContext(SearchContext);
  const searchValue = search?.value;
  const setSearchValue = search?.setValue;

  const handleSearch = useDebouncedCallback((term: string) => {
    setSearchValue(term);
  }, 300);

  return (
    <div className={styles.search}>
      <input
        placeholder="search movie"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchValue}
      />
    </div>
  );
}
