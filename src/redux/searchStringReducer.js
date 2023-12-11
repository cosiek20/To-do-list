
// actions
const createActionName = actionName => `app/search/${actionName}`;
const SEARCH_CARD = createActionName('SEARCH_CARD');

// actions creators
export const searchCard = payload => ({ type: SEARCH_CARD, payload });
const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH_CARD:
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringReducer;