import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { useSelector } from 'react-redux/es/hooks/useSelector';

//selectors
export const getFilteredCards = ({searchFraze, cards}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchFraze));

export const getAllColumns = state => state.columns;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload,  id: shortid()}]};

    case 'ADD_CARD':
      return{ ...state, cards: [...state.cards, { ...action.payload,  id: shortid()}]};

      case 'SEARCH_CARD':
        return{ ...state, searchFraze: action.payload}

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