// App.jsx
import React from 'react';
import Routes from './Routes';
import MainLayout from './MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
};

export default App;