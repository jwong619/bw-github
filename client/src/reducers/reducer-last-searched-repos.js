export default (state = [{id: 1, rank: 2, name: 'searchedjuliasRepo1', ownerName: 'jwong619', topContributor: 'stranger1somelongg'}, {id: 2, rank: 3, name: 'juliasRepo2', ownerName: 'paulCat', topContributor: 'stranger2'}], action) => {
  // change back initial reducer to list to null when API limit expires
  // console.log(action.payload);
  switch (action.type) {
    case 'UPDATE_LAST_SEARCHED_REPOS_LIST': {
      state = action.payload;
      break;
    }
  }
  return state;
}