import {combineReducers} from 'redux';
import topHundredReposReducer from './reducer-top-hundred-repos.js';
import lastSearchedReposReducer from './reducer-last-searched-repos.js';


const allReducers = combineReducers({
  topHundredRepos: topHundredReposReducer,
  lastSearchedRepos: lastSearchedReposReducer
});

export default allReducers;