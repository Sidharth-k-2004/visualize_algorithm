import React from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
    <Router>
      <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignUpPage />} />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;
