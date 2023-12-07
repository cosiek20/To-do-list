import styles from './PageTitle.module.scss';

const PageTitle = props => (
  <h1 className={styles.title}>{props.children}</h1>
);

export default PageTitle;
