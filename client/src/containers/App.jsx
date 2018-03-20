import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTopHundredRepos} from '../actions/index.js';
import TopHundredReposList from './TopHundredReposList.jsx';


class App extends React.Component {

  // on mount
  componentDidMount () {
    console.log('mounted');
    // this.props.getTopHundredRepos();
  }
        //   <img id='logo' src='https://png.icons8.com/metro/1600/github.png' />

        // <span id='pageTitle'> Ranked Repos </span>

  render() {

    return (
      <div>

        <div id='titleBlock'>

          <span id='logoContainer'>
            <img id='logo' src='https://png.icons8.com/metro/1600/github.png' />
          </span>

          <span id='pageTitle'>
              Ranked Repos
            </span>

        </div>



        <div className='topReposList'>
          <TopHundredReposList />
        </div>



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