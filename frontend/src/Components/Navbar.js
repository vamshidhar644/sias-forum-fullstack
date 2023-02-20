import React from 'react';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import LoginForm from './LoginForm';
import '../Styles/Navbar.css';
import NavigationBar from '../pages/NavigationBar';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  
  // console.log(user)
  const handleClick = () => {
    logout();
  };
  return (
      <div className='MainNav-Container'>
        
        <div className="Navbar-container">
          {user && (
            <div className="logOutSection">
              <p>Hello! <span className='userFirstname'>{user.firstName} </span></p>
              <div className="loginoutbuttons" onClick={handleClick}>
                Logout
              </div>
            </div>
          )}
          {!user && <LoginForm />}
        </div>
        <NavigationBar/>
      </div>
  );
};

export default Navbar;
