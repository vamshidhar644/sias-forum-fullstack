import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import ProjectCard from './ProjectCard';

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
    <>
      <div className="Project-Section">        
          <div className="container-title">
            <h1 className="Aboutus-title">Projects</h1>
          </div>    
          <div className="Cards-Container">
          {ProjectData.map((projectdata) => (
            <ProjectCard key={projectdata.name} projectdata={projectdata}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
