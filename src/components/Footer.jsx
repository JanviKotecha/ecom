import React from 'react';

const Footer = () => {
  return (
    <footer
      className="page-footer font-small special-color-dark pt-4"
      style={{ background: '#000' }}
    >
      <div
        className="footer-copyright text-center py-3"
        style={{ color: '#fff' }}
      >
        © 2022 Copyright:
        <a href="https://mdbootstrap.com/"> Mobile Store</a>
      </div>
    </footer>
  );
};

export default Footer;
