import React from 'react';

function Col(props) {
  return (
    <div className="col s12 m6 l4">
      {props.children}
    </div>
  )
};

export default Col;