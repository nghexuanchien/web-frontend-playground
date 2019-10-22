import React from 'react';
import {withRouter} from 'react-router-dom';

class ProjectDetails extends React.Component{
  constructor(props){
    super(props);
    this.backToProjectList = this.backToProjectList.bind(this);
  }

  backToProjectList(evt){
    this.props.history.push('/project');
  }

  render(){
    return <div>
      <h3>The details of project ID: {this.props.match.params.id}</h3>
      <button type={'button'} onClick={this.backToProjectList}>Back to project List</button>
      </div>
  }
}

export default withRouter(ProjectDetails);