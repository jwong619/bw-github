import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class TopHundredReposList extends React.Component {
  //               // <img src={repo.owner.avatar_url} />

  createTopHundredReposListEntries() {
    // change back initial reducer to list to null when API limit expires
    // console.log(this.props.topHundredRepos);
    if (this.props.topHundredRepos !== null) {
      var repos = this.props.topHundredRepos;
      return repos.map((repo, index) => {
        return (
          <div key={index}>
            <div className="topRepos">

            <span className='rank'> {index + 1}.</span>
            <span className='repoName'> {repo.name} </span>
            <span className='contributor'> {repo.topContributor.login} </span>
            <span> <img className='contributorImage' src='http://www.iconninja.com/files/886/846/374/github-social-online-media-icon.png'/> </span>

            </div>
          </div>
        );
      })
    }
  }

  render() {

    return (
      <div>

       {this.createTopHundredReposListEntries()}

      </div>
    );

  }
}

var mapStateToProps = (state) => {
  return {
    topHundredRepos: state.topHundredRepos
  }
}

var mapDispatchTopProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchTopProps)(TopHundredReposList);