import {combineReducers} from 'redux';
import topHundredReposReducer from './reducer-top-hundred-repos.js';
import lastSearchedReposReducer from './reducer-last-searched-repos.js';
import repoModalReducer from './reducer-repo-modal.js';
import selectedRepoReducer from './reducer-selected-repo.js';

const allReducers = combineReducers({
  topHundredRepos: topHundredReposReducer,
  lastSearchedRepos: lastSearchedReposReducer,
  repoModal: repoModalReducer,
  selectedRepo: selectedRepoReducer
});

export default allReducers;