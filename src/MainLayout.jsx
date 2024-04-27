// MainLayout.jsx
import React from 'react';
//import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      
      <main>{children}</main>
      
    </div>
  );
};

export default MainLayout;