// Routes.jsx
import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'; // Rename Routes to ReactRoutes
import Home from './routes/Home';
import LoginPage from './routes/LoginPage'
import QuizPage from './routes/QuizPage'
import Results from './routes/Results'
const Routes = () => {
  return (
    <BrowserRouter>
        <ReactRoutes> {/* Use ReactRoutes here */}
            <Route exact path="/" element={<Home />} /> {/* Use element prop instead of component */}
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/quiz-page" element={<QuizPage />} /> 
            <Route path="/results" element={<Results />} /> 
        </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;