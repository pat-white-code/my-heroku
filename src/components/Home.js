import React from 'react';

const Home = (props) => {
  const { getListings } = props;
  return (
    <div>
      <h1>Welcome to ShareBnB</h1>
      <h4>(no relation to AirBNB)</h4>
      <button onClick={getListings}>Get Listings</button>
    </div>
  )
}

export default Home;