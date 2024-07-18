import { ReactNode } from 'react';
import { v4 } from 'uuid';

import styles from './list.module.less';

export interface List {
  data: any[];
  render(item: any): ReactNode;
  title: string;
  loading?: boolean;
}

export function List(props: List) {
  const data = props?.data ?? [];
  const render = props?.render;
  const title = props?.title ?? '';
  const loading = props?.loading ?? false;

  if (loading) {
    return <div className={styles.loading}>Loading</div>;
  }

  return (
    <div className={styles.list_wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {data.map((item: any) => {
          return <div key={v4()}>{render ? render(item) : '-'}</div>;
        })}
      </div>
    </div>
  );
}
