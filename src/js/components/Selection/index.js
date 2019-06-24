import { connect } from 'react-redux';
import Selection from './Selection';

// This function takes the store and returns an object that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    city: store.get.city,
    searches: store.get.searches,
    error: store.get.error,
    displayIndex: store.get.displayIndex
  };
}

// This might look odd but, connect returns a function that is then
// called with the component itself.
export default connect(mapStoreToProps)(Selection);
