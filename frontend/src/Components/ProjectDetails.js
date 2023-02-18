import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/ProjectDetails.css';

function ProjectDetails() {
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

  console.log(location.state);
  return (
    <>
      <div>
        <div className="container-title">
          <h1 className="Aboutus-Title">{Project_Title}</h1>
        </div>
        <div className="ProjectDetails-Container">
        <table>
          <tr>
            <td className='ProjectInfo-Header'>Title</td>
            <td className='ProjectInfo-Content'><h2>{Project_Title}</h2></td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Field</td>
            <td className='ProjectInfo-Content'><h3>{Project_Field}</h3></td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Description</td>
            <td className='ProjectInfo-Content'>
              <h6>{Project_Description}</h6>
              <img src={Project_Image} alt=''/>
            </td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Qualification</td>
            <td className='ProjectInfo-Content'></td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Desirable skills</td>
            <td className='ProjectInfo-Content'>{Project_Skills}</td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Registration Fee</td>
            <td className='ProjectInfo-Content'>{Project_Fee}</td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Duration</td>
            <td className='ProjectInfo-Content'>{Project_Duration}</td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Venue</td>
            <td className='ProjectInfo-Content'>{Project_Venue}</td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Status</td>
            <td className='ProjectInfo-Content'></td>
          </tr>
          <tr>
            <td className='ProjectInfo-Header'>Contact us</td>
            <td className='ProjectInfo-Content'>{Project_Contact}</td>
          </tr>
        </table>
      </div>
    <div className="float" onClick={() => setSignupShow(true)}>
      <div class="fa fa-plus my-float">Apply</div>
    </div>
    {/* <Signup show={SignupShow} onHide={() => setSignupShow(false)} /> */}
  </div>
    </>
  );
}

export default ProjectDetails;
