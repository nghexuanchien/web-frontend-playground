import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project'
import Header from './components/Header';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/project'} component={Project}/>
        <Route component={(props) => <div>404 Not found</div>}/>
        {/*<Route path={'/project/:id'} component={ProjectDetails}/>*/}
      </Switch>
    </Router>
  );
}

export default App;
