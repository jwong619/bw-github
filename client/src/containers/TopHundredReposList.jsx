import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class TopHundredReposList extends React.Component {
  //               // <img src={repo.owner.avatar_url} />

  createTopHundredReposListEntries() {
    if (this.props.topHundredRepos !== null) {
      var repos = this.props.topHundredRepos;
      return repos.map((repo, index) => {
        return (
          <div key={index}>
            <div className="topRepos">
              {repo.name}
            </div>
          </div>
        );
      })
    }
  }


  render() {

    return (
      <div>
      List

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