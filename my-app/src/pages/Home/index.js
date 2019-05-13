import React from 'react';


function Home() {
  return (
    <div className="container center-align">
      <div className="row valign-center">
        <div className="col l4 s12">
          <img id="profile-pic" className="responsive-img z-depth-2" src="./images/me_trim.png" alt="my_face" />
        </div>
        <div className="col l8 s12">
          <h2 style={{ "margin": "5px auto" }}>Daniel Morales</h2>
          <div className="container">
            <div className="divider"></div>
            <p>Hello, my name is Dan! I'm validation engineer by day, and capoerista / amateur musician /
                        husband by night!</p>
            <p>As you might suspect, I enjoy playing music and martial arts, as well as a slew of "nerdier
                        things" like board games, video games, and coding when time permits.</p>
            <p>This portfolio will eventually be filed with my more notable completed projects, so check back
                        frequently!</p>
            <p>Feel free to use the contact form page to ask me any questions!</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;