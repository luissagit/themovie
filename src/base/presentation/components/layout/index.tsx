import { ReactNode } from 'react';
import styles from './layout.module.less';

export interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const children = props?.children;
  return <div className={styles.layout}>{children}</div>;
}
