export default (state = 'null', action) => {
  switch (action.type) {
    case 'UPDATE_REPOS_LIST': {
      state = action.payload;
      break;
    }
  }
  return state;
}