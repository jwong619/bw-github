import {combineReducers} from 'redux';
import topHundredReposReducer from './reducer-top-hundred-repos.js';


const allReducers = combineReducers({
  topHundredRepos: topHundredReposReducer

});

export default allReducers;