import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from "clsx"
import { toggleCardFavorite } from '../../redux/store';

const Card = ({id, isFavorite, title}) => {

const dispatch = useDispatch();


  return(
      <li className={styles.card}>
        {title}
        <button onClick={() => dispatch(toggleCardFavorite(id))}><i className={clsx('fa fa-star-o', styles.icon, isFavorite === true && styles.favoriteIcon)}></i></button>
      </li>
  );
};

export default Card;


