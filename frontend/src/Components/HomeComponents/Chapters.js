import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import '../../Styles/Home.css';

const Aboutus = () => {
  const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "chapters"] {name, info}`)
      .then((HomeData) => setHomeData(HomeData))
      .catch(console.error);
  });
  return (
    <div className="Home-Section">
    <div className="container-title">
      <h1 className="Aboutus-title">
        Chapters | MoU
      </h1>
    </div>    
      {HomeData.map((homedata) => (
        <div className="Section-Container">
          <p>{homedata.info}</p>
        </div>
      ))}
    </div>
  );
};

export default Aboutus;
