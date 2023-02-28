import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import '../Styles/Navbar.css';

import { useLogin } from '../hooks/useLogin';

const LoginSection = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(userName, password);
  };

  return (
    <Form className="Login-Form">
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Username"
          className="loginformInput"
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
        />
        {error && <div className="error">{error}!!</div>}
      </Form.Group>
      <Form.Group className="Password-Area">
        <Form.Control
          type="password"
          placeholder="Password"
          className="loginformInput"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <NavLink to='/forgotPassword'>Forgot password?</NavLink>
      </Form.Group>

      <Form.Group className="logInSection">
        <div
          className="loginoutbuttons"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Login <AiOutlineLogin />
        </div>
        <Link
          className="loginoutbuttons"
          to="/signup"
          style={{ textDecoration: 'none' }}
        >
          Become a member <AiOutlineUserAdd />
        </Link>
      </Form.Group>
    </Form>
  );
};

export default LoginSection;
