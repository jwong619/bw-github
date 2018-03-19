import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class App extends React.Component {



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

  }
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({});
};

export default connect(mapStateToProps, mapDispatchToProps)(App);