import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../../src/assets/images/logo.png';
import homeicon from '../../../src/assets/images/home-icon.png';
import friendicon from '../../../src/assets/images/friend-icon.png';
import exploreicon from '../../../src/assets/images/explore-icon.png';
import notificationicon from '../../../src/assets/images/notification-icon.png';
import profileicon from '../../../src/assets/images/profile-icon.png';
import signouticon from '../../../src/assets/images/sign-out.png';
import Navbar from 'react-bootstrap/Navbar';
import '../../../src/fonts/fonts.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState(location.pathname)

  const handleNavbarItemClick = (path: string) => {
    setActiveNavItem(path);
    navigate(path)
  };

  const activeLinkStyles = {
    color: 'red',
  };

  return (
    <Row className="menu-bar-row">
      <Col xs={12} md={3} lg={2} className="sidebar">
        <div className="left-side-bar">
          <div className="site-logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="sidebar-menu">
            <Navbar>
              <Container>
                <Navbar.Brand
                  href="/dashboard"
                  style={activeNavItem === '/dashboard' ? activeLinkStyles : {}}
                  onClick={() => handleNavbarItemClick('/dashboard')}
                >
                  <img src={homeicon} alt="searchicon" className="searchicon" />
                  {' '}
                  Home
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar>
              <Container>
                <Navbar.Brand
                  href="/friends"
                  style={activeNavItem === '/friends' ? activeLinkStyles : {}}
                  onClick={() => handleNavbarItemClick('/friends')}
                >
                  <img src={friendicon} alt="searchicon" className="searchicon" />
                  {' '}
                  Friends
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar>
              <Container>
                <Navbar.Brand
                  href="/Explore"
                  style={activeNavItem === '/Explore' ? activeLinkStyles : {}}
                  onClick={() => handleNavbarItemClick('/Explore')}
                >
                  <img src={exploreicon} alt="searchicon" className="searchicon" />
                  {' '}
                  Explore
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar>
              <Container>
                <Navbar.Brand
                  href="/Notification"
                  style={activeNavItem === '/Notification' ? activeLinkStyles : {}}
                  onClick={() => handleNavbarItemClick('/Notification')}
                >
                  <img src={notificationicon} alt="searchicon" className="searchicon" />
                  {' '}
                  Notification
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar>
              <Container>
                <Navbar.Brand
                  href="/Profile"
                  style={activeNavItem === '/Profile' ? activeLinkStyles : {}}
                  onClick={() => handleNavbarItemClick('/Profile')}
                >
                  <img src={profileicon} alt="searchicon" className="searchicon" />
                  {' '}
                  Profile
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar>
              <Container>
                <Navbar.Brand
                  href="/SignOut"
                  style={activeNavItem === '/SignOut' ? activeLinkStyles : {}}
                  onClick={() => handleNavbarItemClick('/SignOut')}
                >
                  <img src={signouticon} alt="searchicon" className="searchicon" />
                  {' '}
                  Sign Out
                </Navbar.Brand>
              </Container>
            </Navbar>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Sidebar;