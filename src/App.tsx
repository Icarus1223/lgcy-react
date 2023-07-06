import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Signin from './pages/auth/signin/signin';
import DashBoard from './pages/dashboard/dashboard';
import Notification from './pages/notification/notification';
import PostDetail from './pages/postdetail/postdetail';
import Profile from './pages/profile/profile';
import Explore from './pages/explore/explore';
import Friends from './pages/friends/friends';
import Signup from './pages/auth/signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute> } />
          <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
          <Route path="/friends" element={<ProtectedRoute><Friends /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
