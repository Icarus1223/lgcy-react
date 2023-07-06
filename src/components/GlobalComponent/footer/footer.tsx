import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Community Guidelines</a>
        <a href="#">Terms of Use </a>
        <a href="#">Privacy Policy </a>
        <a href="#">Cookie Policy</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
