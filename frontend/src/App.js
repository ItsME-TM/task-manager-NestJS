import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//import TestApi from './testApi';
import TaskList from './components/tasks/TaskList';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
};

function AppContent() {
  return (
    <div className="app-container">
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tasks"
            element={<ProtectedRoute><TaskList /></ProtectedRoute>}
          />
          <Route path="/" element={<Navigate to="/tasks" />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;