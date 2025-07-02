import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const date = document.getElementById('date');
    if (date) {
      date.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="page-footer">
      <p>
        &copy; <span id="date"></span>
        <span className="footer-logo">Oshana Kavishan Silva</span>
      </p>
    </footer>
  );
}

export default Footer;
