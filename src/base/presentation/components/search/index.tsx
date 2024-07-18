import styles from './search.module.less';

export function Search() {
  return (
    <div className={styles.search}>
      <input placeholder="search movie" />
    </div>
  );
}
