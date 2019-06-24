import { connect } from 'react-redux';
import CityPanel from './CityPanel';

function mapStoreToProps(store) {
  return {
    city: store.get.city,
    searches: store.get.searches,
    displayIndex: store.get.displayIndex
  };
}

export default connect(mapStoreToProps)(CityPanel);
