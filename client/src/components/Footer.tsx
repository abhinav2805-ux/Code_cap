import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <p>© {new Date().getFullYear()} CodeCap. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
