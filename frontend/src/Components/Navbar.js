import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import LoginForm from './LoginForm';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className="Navbar-container">
        <Link to="/" className="Brand-Logo" style={{ textDecoration: 'none' }}>
          <h1>SIAS</h1>
        </Link>
        {user && (
          <div className="logInOut">
            <span>{user.email} </span>
            <div className="loginoutbuttons" onClick={handleClick}>
              Logout
            </div>
          </div>
        )}
        {!user && <LoginForm />}
      </div>
    </header>
  );
};

export default Navbar;
