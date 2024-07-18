import styles from './card.module.less';

export interface Card {
  title?: string;
  description?: string;
  image_url?: string;
}

export function Card(props: Card) {
  const title = props?.title ?? '';
  const description = props?.description ?? '';
  const image_url = props?.image_url ?? '';

  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <img src={image_url} alt={title} className={styles.image} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
