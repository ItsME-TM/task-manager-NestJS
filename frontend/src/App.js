import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import { Container, Typography } from '@mui/material';

const Tasks = () => {
  return <Typography variant="h4">Tasks Page (Placeholder)</Typography>;
};

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Tasks />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;