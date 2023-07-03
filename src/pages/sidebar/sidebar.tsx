import React from 'react';
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
import '../../../src/fonts/fonts.css'; // Import the custom fonts CSS file


const Sidebar: React.FC= () => {
  return (
    <Row  className="menu-bar-row">
        <Col xs={12} md={3} lg={2} className="sidebar">
          <div className="left-side-bar">
            <div className="site-logo">
            <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="sidebar-menu">
            <Navbar className="Active ">
        <Container>
          <Navbar.Brand href="/dashboard">
          <img src={homeicon} alt="searchicon" className="searchicon" />
            {' '}
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className=" ">
        <Container>
          <Navbar.Brand href="#home">
          <img src={friendicon} alt="searchicon" className="searchicon" />
            {' '}
           Friends
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className=" ">
        <Container>
          <Navbar.Brand href="#home">
          <img src={exploreicon} alt="searchicon" className="searchicon" />
          {' '}
           Explore
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className=" ">
        <Container>
          <Navbar.Brand href="/notification">
          <img src={notificationicon} alt="searchicon" className="searchicon" />
          {' '}
           Notification
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className=" ">
        <Container>
          <Navbar.Brand href="#home">
          <img src={profileicon} alt="searchicon" className="searchicon" />
          {' '}
           Profile
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className=" ">
        <Container>
          <Navbar.Brand href="#home">
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