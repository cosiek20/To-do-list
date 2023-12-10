import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import List from '../components/List/List';

//selectors
export const getFilteredCards = ({searchFraze, cards}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchFraze));

export const getAllColumns = state => state.columns;

export const getAllLists = state => state.lists;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => 
  columns.filter(column => column.listId === listId);


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

export const addList = payload => ({type: 'ADD_LIST', payload });

const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload,  id: shortid()}]};

    case 'ADD_CARD':
      return{ ...state, cards: [...state.cards, { ...action.payload,  id: shortid()}]};

    case 'SEARCH_CARD':
      return{ ...state, searchFraze: action.payload}

    case 'ADD_LIST':
      return{ ...state, lists: [ ...state.lists, { ...action.payload, id: shortid()}]};

    default:
      return state;
  }

};

const store = createStore(

  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;