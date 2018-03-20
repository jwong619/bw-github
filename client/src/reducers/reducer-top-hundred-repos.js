export default (state = null, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case 'UPDATE_TOP_REPOS_LIST': {
      state = action.payload;
      break;
    }
  }
  return state;
}