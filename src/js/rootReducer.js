import { combineReducers } from 'redux';
import selectionReducer from './components/Selection/selectionReducer';

const rootReducer = combineReducers({
  get: selectionReducer
});

export default rootReducer;
