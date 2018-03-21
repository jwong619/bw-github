export default (state = null, action) => {
  // change back initial reducer to list to null when API limit expires
  // console.log(action.payload);
  switch (action.type) {
    case 'UPDATE_TOP_REPOS_LIST': {
      state = action.payload;
      break;
    }
  }
  return state;
}