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
import Topbar from './pages/topbar/topbar';
import { Container } from 'react-bootstrap';
import Sidebar from './pages/sidebar/sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Signin />} />
        </Routes>
        <Container fluid>
          <div className="content-outer">
      <Topbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/postdetail" element={<PostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Sidebar />
</div>
</Container>
      </div>
    </Router>
  );
}

export default App;
