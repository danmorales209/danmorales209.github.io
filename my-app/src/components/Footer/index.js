import React from 'react';

function Footer() {

  var currentDate = new Date();

  return (
    <>
      <div className="hide-on-med-and-above" style={{ "height": "25px" }}></div>

      <footer className="page-footer grey darken-3 z-depth-2">
        <div className="container center-align" style={{ margin: "auto", width: "100%" }}>
          {`© Copyright ${currentDate.getFullYear()} Daniel Morales`}
        </div>
      </footer>
    </>
  )
}

export default Footer;