import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/cardsReducer';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state))
  

  if(!cards.length == 1) return <div>  <PageTitle>Favorite</PageTitle><p className={styles.paragraph}>No cards to show...</p></div>
  return (
    <div>
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.paragraph}>Lorem Ipsum</p>
      </div>
      <article  className={styles.column}>
        <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
        </ul>
      </article>
    </div>
  );
};

  export default Favorite;