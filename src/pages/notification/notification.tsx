import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import { Container, Row, Col } from 'react-bootstrap';
import userphone from '../../../src/assets/images/userphoto.png';
import notifpostimage from '../../../src/assets/images/notif-post-image.jpg';


const Notification: React.FC = () => {
  return (<>
    <Topbar />
    <Container>
      <div className="content-outer">
        <Row className="content-bar-row">
          <Col xs={12} md={12} lg={12} className="main-content">
            <div className="notifications-content-area">
              <div className="all-notifications-lists">
                <h3>Notifications</h3>
                <div className="notification-content">
                  <div className="single-notification">
                    <div className="user-profile-pic">
                      <img src={userphone} alt="searchicon" className="searchicon" />
                    </div>
                    <div className="user-activity-on-post">
                      <h6><span className="notif-user-name">username</span> commented on your post</h6>
                    </div>
                    <div className="post-image">
                      <img src={notifpostimage} alt="notifpostimage" className=""></img>
                    </div>
                  </div>

                  <div className="single-notification">
                    <div className="user-profile-pic">
                      <img src={userphone} alt="searchicon" className="searchicon" />
                    </div>
                    <div className="user-activity-on-post">
                      <h6><span className="notif-user-name">username</span> like your post</h6>
                    </div>
                    <div className="post-image">
                      <img src={notifpostimage} alt="notifpostimage" className=""></img>
                    </div>
                  </div>

                  <div className="single-notification">
                    <div className="user-profile-pic">
                      <img src={userphone} alt="searchicon" className="searchicon" />
                    </div>
                    <div className="user-activity-on-post">
                      <h6><span className="notif-user-name">username</span> is following your timeline <span className="notif-user-name">timeline title</span></h6>
                    </div>
                    <div className="post-image">
                      <img src={notifpostimage} alt="notifpostimage" className=""></img>
                    </div>
                  </div>

                  <div className="single-notification">
                    <div className="user-profile-pic">
                      <img src={userphone} alt="searchicon" className="searchicon" />
                    </div>
                    <div className="user-activity-on-post">
                      <h6><span className="notif-user-name">username</span> tagged you in a post</h6>
                    </div>
                    <div className="post-image">
                      <img src={notifpostimage} alt="notifpostimage" className=""></img>
                    </div>
                  </div>

                  <div className="single-notification">
                    <div className="user-profile-pic">
                      <img src={userphone} alt="searchicon" className="searchicon" />
                    </div>
                    <div className="user-activity-on-post">
                      <h6><span className="notif-user-name">username</span> tagged you in a caption</h6>
                    </div>
                    <div className="post-image">
                      <img src={notifpostimage} alt="notifpostimage" className=""></img>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Sidebar />

      </div>
    </Container>
  </>

  );
};

export default Notification;
