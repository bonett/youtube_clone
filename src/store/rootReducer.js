import { combineReducers } from 'redux';
import { rootReducer as appReducer } from './app';

const rootReducer = combineReducers({
  appReducer
});

export default rootReducer;
