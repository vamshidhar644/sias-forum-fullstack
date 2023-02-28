import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '../../Styles/ProjectDetails.css';

function ProjectDetails() {

  const [active, setActive] = useState('field')
  function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  }

  const location = useLocation();
  const {
    Project_Title,
    Project_Image,
    Project_Field,
    Project_Description,
    Project_Duration,
    Project_Skills,
    Project_Fee,
    Project_Venue,
    Project_Contact,
  } = location.state;
  
  const [SignupShow, setSignupShow] = React.useState(false);

  // console.log(location.state);
  return (
    <>
      <div className="container-title">
          <h1 className="Aboutus-Title">{Project_Title}</h1>
        </div>
      <div className='ProjectDetails'>
        <div className='content-section'>
        <div className="sidebar" onClick={myFunction}>
          <div className="active" onClick={() => setActive('field')}>Field</div>
          <div onClick={() => setActive('description')}>Description</div>
          <div onClick={() => setActive('duration')}>Duration</div>
          <div onClick={() => setActive('skills')}>Desired skills</div>
          <div onClick={() => setActive('fees')}>Registration Fee</div>
          <div onClick={() => setActive('venue')}>Venue</div>
          <div onClick={() => setActive('contact')}>Contact us</div>
        </div>

        <div className="content">
          {active === 'field' && <div><h5>{Project_Field}</h5></div>}
          {active === 'description' && <div><p>{Project_Description}</p></div>}
          {active === 'duration' && <div><h6>{Project_Duration}</h6></div>}
          {active === 'skills' && <div><h6>{Project_Skills}</h6></div>}
          {active === 'fees' && <div><h6>{Project_Fee}</h6></div>}
          {active === 'venue' && <div><h6>{Project_Venue}</h6></div>}
          {active === 'contact' && <div><h6>{Project_Contact}</h6></div>}
        </div> 
        </div>

    <div className="float" onClick={() => setSignupShow(true)}>
      <div className="fdiv fa-plus my-float">Apply</div>
    </div>
    {/* <Signup show={SignupShow} onHide={() => setSignupShow(false)} /> */}
  </div>
    </>
  );
}

export default ProjectDetails;
