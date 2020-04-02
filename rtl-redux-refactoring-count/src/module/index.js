import {combineReducers} from 'redux';
import counter from './counter';
import waiting from './waiting';

const rootReducer = combineReducers({
    counter,
    waiting
  });
  
  export default rootReducer;
  