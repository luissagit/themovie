import { Search } from '../search';
import styles from './header.module.less';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <h1>themovie</h1>
        <Search />
      </div>
    </div>
  );
}
