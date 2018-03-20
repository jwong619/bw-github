import axios from 'axios';

export const setTopHundredRepos = (repos) => {
  return {
    type : 'UPDATE_TOP_REPOS_LIST',
    payload: repos
  };
};

export const getTopHundredRepos = () => (dispatch, getState) => {
  // handle api in server instead
  axios.post('topHundredRepos/import/save')
  .then(result => {
    console.log('getting 100 success ---->', result);
    console.log('results --- ', result.data);
    return dispatch(setTopHundredRepos(result.data));
  })
  .catch(error => {
    console.log('failed getting 100', error);
  })
};

export const setSearchedRepos = (repos) => {
  return {
    type : 'UPDATE_LAST_SEARCHED_REPOS_LIST',
    payload: repos
  };
};


export const search = () => (dispatch, getState) => {
  axios.post('/repos/search/username')
  .then(result => {
    console.log('search repos for username success');
    // console.log('results --- ', result.data);
    return dispatch(setSearchedRepos(result.data));
  })
  .catch(error => {
    console.log('failed getting searched repos', error);
  })
}