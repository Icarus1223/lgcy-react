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
          <Route
            path="/dashboard"
            element={
              <>
                <Topbar />
                <Container fluid>
                  <div className="content-outer">
                    <Sidebar />
                    <Dashboard />
                  </div>
                </Container>
              </>
            }
          />
          <Route
            path="/notification"
            element={
              <>
                <Topbar />
                <Container fluid>
                  <div className="content-outer">
                    <Sidebar />
                    <Notification />
                  </div>
                </Container>
              </>
            }
          />
          <Route
            path="/postdetail"
            element={
              <>
                <Topbar />
                <Container fluid>
                  <div className="content-outer">
                    <Sidebar />
                    <PostDetail />
                  </div>
                </Container>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Topbar />
                <Container fluid>
                  <div className="content-outer">
                    <Sidebar />
                    <Profile />
                  </div>
                </Container>
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Topbar />
                <Container fluid>
                  <div className="content-outer">
                    <Sidebar />
                    <Explore />
                  </div>
                </Container>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
