import {combineReducers} from 'redux';
import ReposReducer from './reducer-repos';


const allReducers = combineReducers({
  repos: ReposReducer

});

export default allReducers;