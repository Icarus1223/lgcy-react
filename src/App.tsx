import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/auth/signin/signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard/dashboard';
import Notification from './pages/notification/notification';
import Profile from './pages/profile/profile';
import PostDetail from './pages/postdetail/postdetail';
import Explore from './pages/explore/explore';
import Friends from './pages/friends/friends';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/postdetail" element={<PostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
