import axios from 'axios';

export const getTopHundredRepos = () => (dispatch, getState) => {
  // handle api in server instead

  // axios.get(`https://api.github.com/repositories`)
  // .then((result) => {
  //   console.log('result', result);
  // })

  axios.get('topHundredRepos/import/save')
  .then(result => {
    console.log('getting 100 success');
    console.log('results --- ', result.data);
  })
  .catch(error => {
    console.log('failed getting 100', error);
  })
};