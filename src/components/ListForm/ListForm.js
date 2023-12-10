import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';


const ListForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDesciption] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title,description }));
    setTitle('');
    setDesciption('')
  }

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Title:</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Icon:</label>
            <TextInput value={description} onChange={e => setDesciption(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ListForm;