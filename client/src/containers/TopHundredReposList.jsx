import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import {showRepoModal, closeRepoModal, selectRepo} from '../actions/index.js';


class TopHundredReposList extends React.Component {

  createTopHundredReposListEntries() {
    if (this.props.topHundredRepos !== null) {
      var repos = this.props.topHundredRepos;
      return repos.map((repo, index) => {
        return (
          <div key={index}>
            <div className='topRepos' onClick={ () => { this.props.selectRepo(repo); this.props.showRepoModal({visibility: true})}} >

            <span className='rank'> {index + 1}.</span>
            <span className='repoName'> {repo.name} </span>
            <span className='owner'> {repo.owner.login} </span>
            <span> <img className='ownerImage' src={repo.owner.avatar_url}/> </span>

            </div>
          </div>
        );
      })
    }
  }

  render() {

    return (

      <div>
        <div>

        <Modal className='modals' show={this.props.repoModal.visibility} onHide={ () => this.props.closeRepoModal({visibility: false})}>
          <Modal.Header closeButton>
             <Modal.Title>
                <div className='modalRepoName'>{this.props.selectedRepo.name}</div>
                <div >{this.props.selectedRepo.stargazers_count} ★ </div>
             </Modal.Title>
             <hr />
          </Modal.Header>


          <Modal.Body>
                <div> Top Contributor: </div>
                <br />

                <img className='contributorImages' src={this.props.selectedRepo.topContributor.avatar_url}/>
                <div className='username'>{this.props.selectedRepo.topContributor.login}</div>

          </Modal.Body>


        </Modal>



         {this.createTopHundredReposListEntries()}
       </div>

      </div>


    );

  }
}

var mapStateToProps = (state) => {
  return {
    topHundredRepos: state.topHundredRepos,
    selectedRepo: state.selectedRepo,
    repoModal: state.repoModal
  };
};

var mapDispatchTopProps = (dispatch) => {
  return bindActionCreators({selectRepo: selectRepo, showRepoModal: showRepoModal, closeRepoModal: closeRepoModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchTopProps)(TopHundredReposList);