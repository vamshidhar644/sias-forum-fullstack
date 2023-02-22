import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';
import '../Styles/Navbar.css';

const NavigationBar = () => {
  // const { user } = useAuthContext();
  return (
    <div className="navigation-container">
        {/* <Navigation/> */}
        
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='Brand-Logo'>
              <h1>SIAS</h1>
            </div>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link dropdown-toggle" id="navbarDropdown" aria-haspopup="true">
                    Home
                </NavLink>
                <ul className="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="/aboutus">About us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/mission'>Mission</NavLink>
                  </li>
                  <li>
                    <NavLink to='/vision'>Vision</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to='/membershipBen' className="nav-link dropdown-toggle" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
                    Membership
                </NavLink>
                <ul className="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="/membershipBen">Benefits</NavLink>
                  </li>
                  <li>
                    <NavLink to="/chapters">Chapters/MoU</NavLink>
                  </li>
                  <li>
                    <NavLink to='/becomeMember'>Become a member</NavLink>
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
              {/* {
                user && ( */}
                  <li className="nav-item">
                    <NavLink to='/members'>Members</NavLink>
                  </li>
                {/* )
              } */}
            </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default NavigationBar