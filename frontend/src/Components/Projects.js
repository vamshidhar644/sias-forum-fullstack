import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import ProjectCard from './ProjectCard';
import '../Styles/Project.css'

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
            <ProjectCard key={projectdata.title} projectdata={projectdata}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
