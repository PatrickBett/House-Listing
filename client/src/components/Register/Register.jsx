import { useEffect, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      //  API call logic here
      const response = await fetch('http://127.0.0.1:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ username, password }),
        // mode: 'cors',
      });

      const data = await response.json();
      console.log(data);

      alert('User registered successfully');
      
      navigate('/properties');
      console.log('done');
    } catch (error) {
      console.error('This is the error:', error);
    }
  };

  return (
    <div className="register--container">
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} className="register--form">
        <label>Username</label>
        <br />
        <input
          value={username}
          onChange={handleUsernameChange}
          className="input--field"
          type="text"
          placeholder="Username"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          className="input--field"
          type="password"
          placeholder="Password"
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="input--field"
          type="password"
          placeholder="Confirm Password"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />
        <button className="submit--field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
