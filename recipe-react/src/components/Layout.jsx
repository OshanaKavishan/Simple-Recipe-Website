import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* this is where your page content goes */}
      <Footer />
    </>
  );
}

export default Layout;
