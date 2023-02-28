import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import '../../Styles/Home.css';

const MenbershipBenefits = () => {
  const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "membershipben"] {name, info}`)
      .then((HomeData) => setHomeData(HomeData))
      .catch(console.error);
  });
  return (
    <div className="Home-Section">
      <div className="container-title">
        <h1 className="Aboutus-title">Benefits</h1>
      </div>
      {HomeData.map((homedata) => (
        <div className="Section-Container">
          <h4>{homedata.name}</h4>
          <p>{homedata.info}</p>
        </div>
      ))}
    </div>
  );
};

export default MenbershipBenefits;
