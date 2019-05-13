import React from 'react';

function Card(props) {
  return (
    <div className="card horizontal">
      <div className="card-image valign-wrapper">
        <img class="responsive-img" src={props.img} alt={props.title} style={{"max-width":"200px", margin:"auto"}}/>
      </div>
      <div className="card-stacked">
        <div className="card-content valign-wrapper">
          <p>{props.description}</p>
        </div>
        <div className="card-action" style={{backgroundColor: "grey"}}>
          <a className = "center-align" href = {props.url} style={{margin:"auto"}}>{props.title}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;