import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      {isAuthenticated ? (
        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button>
      ) : (
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
