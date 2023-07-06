import React from 'react';
import { Switch, Button } from '@mui/material';
function Control() {
  let listOfComposent = [
    "Electrical vehicule",
    "Home storage",
    "Heat pump"
  ]
  return (
    <div>
      <h1>Control your energy</h1>
      <p>turn off unused composent to safe energy</p>
      <ul>
        {listOfComposent.map((item, index) => (
          <li key={index}>{item}<Switch /></li>
        ))}
      </ul>
      <Button variant="contained">Connect new device</Button>
    </div>
  );
}

export default Control;