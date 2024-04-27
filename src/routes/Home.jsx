// Home.jsx
import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import "../styles/Home.css"
export default function Home(){
  return (
    <Container className="container">
        <Typography variant="h2">InTouch</Typography>
        <Typography variant="subtitle1" className="subtitle">
            [insert subtitle]
        </Typography>
        <Button variant="contained" color="primary">
            Login
        </Button>
  </Container>
    
  );
}

