import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import hearticon from '../../../src/assets/images/heart.png';
import destinationfirst from '../../../src/assets/images/destination1.jpg';
import '../../../src/fonts/fonts.css'; // Import the custom fonts CSS file
import Topbar from '../topbar/topbar';
import Sidebar from '../sidebar/sidebar';


const DashBoard: React.FC = () => {
  return (<>
  <Topbar/>
  <Container fluid>
    <div className="content-outer">
      <Row  className="content-bar-row">
        <Col xs={12} md={9} lg={12} className="main-content">
         <div className="all-destinations-lists">
            <div className='single-destination-outer'>
                <div className="destin-img">
                <img src={destinationfirst} alt="searchicon" className="searchicon" />
                </div>
                <div className="destination-content">
                <div className="destination-name-slog">
                    <h4>katiemorrison</h4>
                    <span> Our Life Adventure</span>
                </div>
                <div className="like-icon">
                    <a href="">
                    <img src={hearticon} alt="searchicon" className="searchicon" />
                    </a>

                </div>
                </div>
            </div>

            <div className='single-destination-outer'>
                <div className="destin-img">
                <img src={destinationfirst} alt="searchicon" className="searchicon" />
                </div>
                <div className="destination-content">
                <div className="destination-name-slog">
                    <h4>katiemorrison</h4>
                    <span> Our Life Adventure</span>
                </div>
                <div className="like-icon">
                    <a href="">
                    <img src={hearticon} alt="searchicon" className="searchicon" />
                    </a>

                </div>
                </div>
            </div>


            <div className='single-destination-outer'>
                <div className="destin-img">
                <img src={destinationfirst} alt="searchicon" className="searchicon" />
                </div>
                <div className="destination-content">
                <div className="destination-name-slog">
                    <h4>katiemorrison</h4>
                    <span> Our Life Adventure</span>
                </div>
                <div className="like-icon">
                    <a href="">
                    <img src={hearticon} alt="searchicon" className="searchicon" />
                    </a>

                </div>
                </div>
            </div>
            
            </div>
        </Col>
      </Row>
      <Sidebar/>
      
      </div>
    </Container>
    </>
  );
};

export default DashBoard;
