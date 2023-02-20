import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5'
import { useAuthContext } from '../hooks/useAuthContext';
import '../Styles/Navbar.css';

const NavigationBar = () => {
  const { user } = useAuthContext();
  return (
    <div className="navigation-container">
        <div className='Brand-Logo'>
            <h1>SIAS</h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            {/* <a href="#" className="navbar-brand">Brand</a> */}
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/">Home ▾</NavLink>
                <ul className="dropdown">
                  <li>
                    <NavLink to="/aboutus">About us</NavLink>
                  </li>
                  <li>
                    <NavLink>Mission</NavLink>
                  </li>
                  <li>
                    <NavLink>Vision</NavLink>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                        <a href="#">Organization</a>
                    </li> */}
              <li className="nav-item">
                <NavLink to="/membershipBen">Membership ▾</NavLink>
                <ul className="dropdown">
                  <li>
                    <NavLink to="/membershipBen">Membership Benefits</NavLink>
                  </li>
                  <li>
                    <NavLink to="/chapters">Chapters/MoU</NavLink>
                  </li>
                  <li>
                    <NavLink>Become a member</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/Projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events">Events</NavLink>
              </li>
              {
                user && (
                  <li className="nav-item">
                    <NavLink>Members</NavLink>
                  </li>
                )
              }
            </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default NavigationBar