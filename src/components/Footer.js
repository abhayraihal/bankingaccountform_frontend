import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-primary text-white">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
