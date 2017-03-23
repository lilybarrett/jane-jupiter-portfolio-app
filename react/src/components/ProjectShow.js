import React from 'react';

const ProjectShow = ({ id, name, description }) => {
  return(
    <div className="project-show row">
      <div className="small-12 small-centered columns">
        <h2>{name}</h2>
        <p>Description: {description}</p>
      </div>
    </div>
  )
}

export default ProjectShow;
