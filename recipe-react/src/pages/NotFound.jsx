import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    const date = document.getElementById('date');
    if (date) {
      date.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <main className="page error-page">
      <section>
        <h1>404</h1>
        <h3>page not found</h3>
      </section>
      <footer className="page-footer">
        <p>
          &copy; <span id="date"></span>
          <span className="footer-logo">Oshana Kavishan Silva</span>
        </p>
      </footer>
    </main>
  );
}

export default NotFound;
