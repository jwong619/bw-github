import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Well} from 'react-bootstrap';


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