import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Layout from './Layout'
import Resume from './Resume'
import ProjectsIndexContainer from '../containers/ProjectsIndexContainer';
import ProjectShowContainer from '../containers/ProjectShowContainer';
import About from './About';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={About} />
         <Route path="resume" component={Resume} />
        <Route path="projects" component={ProjectsIndexContainer} />
        <Route path="projects/:id" component={ProjectShowContainer} />
      </Route>
    </Router>
  )
}

export default App;
