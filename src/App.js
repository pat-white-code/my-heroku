import React from 'react';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App () {
  // const getListings = async() => {
  //   let res = await axios.get('/api/listings');
  //   console.log(res.data);
  // }
  // const test = async () => {
  //   let response = await axios.get('/test');
  //   console.log(response);
  // }
  return (
    <Provider store ={store}>
      <Home />
    </Provider>
  );
}

export default App;
