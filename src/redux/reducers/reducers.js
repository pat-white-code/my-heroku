import { combineReducers } from 'redux';

const listings = (state = [], action) => {
  switch(action.type) {
    case 'GETS_LISTINGS':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  listings
})