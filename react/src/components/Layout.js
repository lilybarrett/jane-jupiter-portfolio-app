import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {
 return(
   <div>
     <div className="row">
      <div className="small-12 small-centered columns">
        <h1 className="page-title text-center"> Jane Jupiter, Developer</h1>
      </div>
     </div>
     <div className="row">
      <div className="small-4 columns text-center">
        <button type="button" className="button large"><Link to="/resume">My Resume</Link></button>
      </div>
      <div className="small-4 columns text-center">
        <button type="button" className="button large"><Link to="/projects">My Projects</Link></button>
      </div>
      <div className="small-4 columns text-center">
        <BackButton />
      </div>
    </div>
      { props.children }
    </div>
 )
}

export default Layout;
