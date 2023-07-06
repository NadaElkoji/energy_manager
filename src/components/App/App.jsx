import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './../NavigationBar/NavigationBar';
import Control from 'components/Control/Control';

const App = () => {
  return ( 
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/control" element={<Control />} />
      </Routes>
    </Router>
  );
};

export default App;
