import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Navbar from './pages/Navbar';
import Signup from './pages/Signup';

import React, { useState } from 'react';

import Aboutus from './Components/HomeComponents/Aboutus';
import MembershipBenefits from './Components/HomeComponents/MembershipBenefits';
import Chapters from './Components/HomeComponents/Chapters';
import Services from './Components/HomeComponents/Services';
import Events from './Components/HomeComponents/Events';
import Banner from './Components/HomeComponents/Banner';
import Courses from './Components/HomeComponents/Courses';

import Projects from './Components/ProjectComponents/Projects';
import ProjectDetails from './Components/ProjectComponents/ProjectDetails';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="*" element={<Banner />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/membershipBen" element={<MembershipBenefits />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/ProjectSlug" element={<ProjectDetails />} />
            <Route path="/Courses" element={<Courses />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
