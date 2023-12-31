import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';


const ColumnForm = ({listId}) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ listId, title, icon }));
    setTitle('');
    setIcon('')
  }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Title:</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Icon:</label>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;