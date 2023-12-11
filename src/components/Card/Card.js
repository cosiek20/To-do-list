import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from "clsx"
import { removeCard, toggleCardFavorite } from '../../redux/cardsReducer';

const Card = ({id, isFavorite, title}) => {

const dispatch = useDispatch();


  return(
      <li className={styles.card}>
        {title}
        <div>
          <button onClick={() => dispatch(toggleCardFavorite(id))}><i className={clsx('fa fa-star-o', styles.icon, isFavorite === true && styles.favoriteIcon)}></i></button>
          <button onClick={() => dispatch(removeCard(id))}><i className={clsx('fa fa-trash', styles.icon)}></i></button>
        </div>
      </li>
  );
};

export default Card;


