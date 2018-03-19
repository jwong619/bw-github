import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTopHundredRepos} from '../actions/index.js';


class App extends React.Component {

  // on mount
  componentDidMount () {
    console.log('mounted');
    this.props.getTopHundredRepos();
  }


  render() {

    return (
      <div>
        In App!!
      </div>
    );

  }

};


var mapStateToProps = (state) => {
  return {
    topHundredRepos : state.topHundredRepos
  }
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getTopHundredRepos: getTopHundredRepos}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);