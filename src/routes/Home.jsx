// Home.jsx
import React from 'react';
import { Typography, Button, Container, Link } from '@mui/material';
import "../styles/Home.css"
export default function Home(){
  return (
    <Container className="container">
        <Typography variant="h2">InTouch</Typography>
        <Typography variant="subtitle1" className="subtitle">
            [insert subtitle]
        </Typography>
        <Link to="/login" >
            <Button variant="contained" color="primary">
                Login
            </Button>
        </Link>
        
  </Container>
    
  );
}

