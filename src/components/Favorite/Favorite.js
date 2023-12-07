import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.paragraph}>Lorem Ipsum</p>
    </div>
  );
};

  export default Favorite;