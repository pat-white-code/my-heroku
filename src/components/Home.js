import React from 'react';

const Home = (props) => {
  const { getListings, listings } = props;
  return (
    <div>
      <h1>Welcome to ShareBnB</h1>
      <h4>(no relation to AirBNB)</h4>
      <button onClick={getListings}>Get Listings</button>
      {listings.map(l => (
        <div key={l._id}>
          <h1>{l.name}</h1>
          <img alt={'house'} src={l.images.picture_url} />
        </div>
      ))}

    </div>
  )
}

export default Home;