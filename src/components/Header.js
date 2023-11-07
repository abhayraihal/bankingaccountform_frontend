import React from 'react';
import logo from './logo.svg'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <img src={logo} alt="logo" />
        <a className="navbar-brand" href="/">My App</a>
      </div>
    </nav>
  );
};

export default Header;
