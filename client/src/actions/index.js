import axios from 'axios';

export const setTopHundredRepos = (repos) => {
  return {
    type : 'UPDATE_TOP_REPOS_LIST',
    payload: repos
  };
};

  // ------- API calls -------//

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


// -------- PAGE ACTIONS --------- //

export const selectRepo = (repo) => (dispatch, getState) => {
  return dispatch({
    type: 'SELECT_REPO',
    payload: repo
  });
};


export const showRepoModal = (visibility) => (dispatch, getState) => {
  return dispatch({
    type: 'SHOW_REPO_MODAL',
    payload: visibility
  });
};

export const closeRepoModal = (visibility) => {
  console.log('closed repo modallllll ----');
  return {
    type: 'CLOSE_REPO_MODAL',
    payload: visibility
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