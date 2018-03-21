export default (state = {
  visibility: false
}, action) => {
  switch (action.type) {
    case 'SHOW_REPO_MODAL' : {
      state = action.payload;
      break;
    }
    case 'CLOSE_REPO_MODAL' : {
      state = action.payload;
      break;
    }
  }
  return state;
}