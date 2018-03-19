import axios from 'axios';

export const getTopHundredRepos = () => (dispatch, getState) => {
  axios.get('topHundredRepos/import/save')
  .then(result => {
    console.log('getting 100 success');
    console.log('results --- ', results);
  })
  .catch(error => {
    console.log('failed getting 100')
  })
};