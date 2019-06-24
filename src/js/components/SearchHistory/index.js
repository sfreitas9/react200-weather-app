import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    city: store.get.city,
    searches: store.get.searches
  };
}

export default connect(mapStoreToProps)(SearchHistory);
