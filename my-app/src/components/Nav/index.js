import React from 'react';
import "../../App.css"

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="" className="brand-logo center">About Me</a>
          <a href="" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="https://www.linkedin.com/in/damorales209/" className="valign-wrapper" style={{"height": "64px"}}>
                <img className="responsive-img" src="./images/linkedin-4-xxl.png" style={{"height": "40px"}} alt="linkedin-logo" />
              </a>
            </li>
            <li>
              <a href="https://github.com/danmorales209" className="valign-wrapper" style={{"height": "64px"}}>
                <img className="responsive-img" src="./images/github-11-xxl.png" style={{"height": "40px"}} alt="github-logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-menu">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contacts">Contact</a></li>
        <li><a href="https://www.linkedin.com/in/damorales209/" target="_blank">LinkedIn Profile</a></li>
        <li><a href="https://github.com/danmorales209" target="_blank">Github Profile</a></li>
      </ul>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </>
  );
};

export default Nav;