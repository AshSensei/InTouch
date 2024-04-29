import React, { useState } from 'react';
import { Typography, Button, Container, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export default function QuizPage() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <Container>
      <Typography variant="h2">Quiz</Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel value="a" control={<Radio />} label="Option A" />
          <FormControlLabel value="b" control={<Radio />} label="Option B" />
          <FormControlLabel value="c" control={<Radio />} label="Option C" />
          <FormControlLabel value="d" control={<Radio />} label="Option D" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};