import styles from './List.module.scss';
import Column from '../Colum/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsReducer';
import { useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';
import { getListById } from '../../redux/listsRedux';

const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId))

  if(!listData) return <Navigate to="/" />
  return(
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <SearchForm />
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
      {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm listId={listId}/>
    </div>
  );
};

export default List;