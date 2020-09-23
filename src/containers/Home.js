import { connect } from 'react-redux';
import {getListings } from '../redux/actions/listings/getListings';
import Home from '../components/Home';

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListings: ()=> { dispatch(getListings()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);