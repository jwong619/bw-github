import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import $ from 'jquery';
import {search} from '../actions/index.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      term: ''
    }
  }




  // no need tp put this in the store
  onChange(q) {
    console.log('searching for', q);
    this.setState({
      query: q.target.value
    })
  }



  render() {
    return (
      <div>
        <h3>Search by user: </h3>
        Enter username <input value={this.state.query} onChange={this.onChange}/>
        <button onClick={this.search}> Search </button>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)


