import axios from 'axios';

export const getListings = () => {
  return async dispatch => {
    let response = await axios.get('/api/listings');
    let listings = response.data;
    dispatch({type: 'GETS_LISTINGS', payload: listings})
  }
}