import React from 'react';
import { Typography, Container, Avatar, Grid, Card, CardContent } from '@mui/material';
import { getJson } from 'serpapi'; 

export default function ResultsPage () {
    const [opportunities, setOpportunities] = React.useState(null);

    React.useEffect(() => {
      const apiKey = '68fa4ec3518075d6ca9508634fa18471d49c38a6de47f535d7e8112516999142'; // Replace with your API key
      getJson({
        api_key: apiKey,
        engine: 'google_events',
        q: 'volunteer opportunities in Sacramento'
      }, (json) => {
        setOpportunities(json);
      });
    }, []);
  
      
  // Sample user image URL
  const userImageUrl = 'https://via.placeholder.com/150';

  // Sample matched volunteer opportunities
  const matchedOpportunities = [
    'Volunteer Opportunity 1',
    'Volunteer Opportunity 2',
    'Volunteer Opportunity 3',
  ];

  return (
    <>
    <div>
        <h2>Volunteer Opportunities in Sacramento</h2>
        {opportunities && opportunities.events ? (
          <ul>
            {opportunities.events.map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong> - {event.date}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
    </div>
    <Container>
      <Typography variant="h2">Results</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Avatar alt="User Image" src={userImageUrl} sx={{ width: 150, height: 150, margin: 'auto' }} />
              <Typography variant="subtitle1" align="center">Your Matches:</Typography>
              {matchedOpportunities.map((opportunity, index) => (
                <Typography key={index} variant="body1" align="center">{opportunity}</Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};