import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import '../../Styles/Project.css'

import Card from 'react-bootstrap/Card';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [ProjectData, setProjectData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"] {name, info, title, slug, author, field, description, duration, skills, fee, venue, contact, image {asset -> {_id, url}, alt}}`
      )
      .then((ProjectData) => setProjectData(ProjectData))
      .catch(console.error);
  });
  
  return (
    <div className='Project-Container'>
      <div className="Project-Section">        
          <div className="container-title">
            <h1 className="Aboutus-title">Projects</h1>
          </div>    
          <div className="Cards-Container">
          {ProjectData.map((projectdata) => (
            <Link
            className="ProjectLink-Card"
            to="/ProjectSlug"
            // key={projectdata.slug}
            state={{
              Project_Title: projectdata.title,
              Project_Image: projectdata.image.asset.url,
              Project_Author: projectdata.author,
              Project_Field: projectdata.field,
              Project_Description: projectdata.description,
              Project_Duration: projectdata.duration,
              Project_Skills: projectdata.skills,
              Project_Fee: projectdata.fee,
              Project_Venue: projectdata.venue,
              Project_Contact: projectdata.contact,
            }}
          >
            <Card className="text-center Project-Card">
              <Card.Title className="Project-Image">
                <img src={projectdata.image.asset.url} alt="" />
              </Card.Title>
              <Card.Body className="Project-Title">
                <h5>{projectdata.title}</h5>
              </Card.Body>
              <Card.Footer className="ProjectCard-Footer">
                <div className="para-container">
                  <p>{projectdata.description}</p>
                </div>
                <h5>
                  Read more
                  <span>
                    {' '}
                    <HiOutlineChevronDoubleRight />
                  </span>
                </h5>
              </Card.Footer>
            </Card>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
