import { combineReducers } from 'redux';
import { rootReducer as dataReducer } from './videos';

const rootReducer = combineReducers({
  dataReducer
});

export default rootReducer;
