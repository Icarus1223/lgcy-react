import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import { Container, Row, Col } from 'react-bootstrap';
import userphone from '../../../src/assets/images/userphoto.png';
import notifpostimage from '../../../src/assets/images/notif-post-image.jpg';


const Explore: React.FC= () => {
  return (<>
   <Topbar/>
  <Container>
    <div className="content-outer">
      <Row  className="content-bar-row">
        <Col xs={12} md={12} lg={12} className="main-content">
        <div className="explore-main-area">
<div className="explore-heading">
<h3>Explore</h3>
</div>
<div className="explore-main-box">
    <div className="explore-single-box">

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

export default Explore;
