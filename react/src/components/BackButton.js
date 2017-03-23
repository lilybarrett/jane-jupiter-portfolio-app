import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div>
      <button className="button large" onClick={browserHistory.goBack}>Back</button>
    </div>
  )
}

export default BackButton;
