import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCard } from '../../redux/store';
import { useEffect } from 'react';

const SearchForm = () => {

    const dispatch  = useDispatch();
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(searchCard(''));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchCard( input ));
        setInput('');
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={input} onChange={e => setInput(e.target.value)}/>
            <Button>
              <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;