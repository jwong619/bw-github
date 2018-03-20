import axios from 'axios';

export const setTopHundredRepos = (repos) => {
  return {
    type : 'UPDATE_TOP_REPOS_LIST',
    payload: repos
  };
};

export const getTopHundredRepos = () => (dispatch, getState) => {
  // handle api in server instead
  axios.get('topHundredRepos/import/save')
  .then(result => {
    console.log('getting 100 success');
    // console.log('results --- ', result.data);
    return dispatch(setTopHundredRepos(result.data));
  })
  .catch(error => {
    console.log('failed getting 100', error);
  })
};