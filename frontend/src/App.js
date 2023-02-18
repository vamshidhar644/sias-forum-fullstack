import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Signup from './Components/Signup';

import React, { useState } from 'react';
import Aboutus from './Components/Aboutus';
import MembershipBenefits from './Components/MembershipBenefits';
import Chapters from './Components/Chapters';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Events from './Components/Events';
import ProjectDetails from './Components/ProjectDetails';
import Banner from './Components/Banner'
import Courses from './Components/Courses';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="*" element={<Banner />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            
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
