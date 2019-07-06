import React from 'react';
import ProjectDetails from "./ProjectDetails";
import {Route, Link} from 'react-router-dom';

class Project extends React.Component{
  render(){
    return <div>
      <h2>The project list goes here</h2>
      <ul>
        <li><Link to={'/project/abc'}>ABC</Link></li>
        <li><Link to={'/project/def'}>DEF</Link></li>
      </ul>
      <Route path={'/project/:id'} component={ProjectDetails}/>
    </div>
  }
}

export default Project;