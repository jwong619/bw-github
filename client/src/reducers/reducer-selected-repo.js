export default (state = {name: 'reaaaact', owner: {login: 'jwong619', avatar_url: 'j'}, topContributor: {login: 'jwong619', avatar_url: 'j'}, stargazers_count: 500}, action) => {
  switch (action.type) {
    case 'SELECT_REPO' : {
      state = action.payload;
      break;
    }
  }
  return state;
}