import React from 'react';
import Topbar from '../topbar/topbar';
import Sidebar from '../sidebar/sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import profileimgcircle from '../../../src/assets/images/profile-img-circle.png';
import activity1 from '../../../src/assets/images/activity1.jpg';
import activity2 from '../../../src/assets/images/activity2.jpg';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (<>
        <Row className="content-bar-row">
          <Col xs={12} md={12} lg={12} className="main-content">
            <div className="profile-main">
              <div className="profile-heading">
                <h5>katiemorrison</h5>
              </div>
              <div className="profil-img-content">
                <div className="prof-img">
                  <img src={profileimgcircle} alt="profile" />
                </div>
                <div className="user-small-info">
                  <h4 className="u-name">Katie Morrison</h4>
                  <p className="u-desc">Welcome to my life adventure</p>
                </div>
              </div>
              <div className="user-activity-image-box">
                <div className="single-box">
                  <div className="activity-image">
                    <Link to="/postdetail">
                      <img src={activity1} alt="profile" />
                    </Link>
                  </div>
                  <div className="activity-content">
                    <p>Our Adventure</p>
                  </div>
                </div>
                <div className="single-box">
                  <div className="activity-image">
                    <img src={activity2} alt="profile" />
                  </div>
                  <div className="activity-content">
                    <p>Journey</p>
                  </div>
                </div>
                <div className="single-box">
                  <div className="activity-image">
                    <img src={activity1} alt="profile" />
                  </div>
                  <div className="activity-content">
                    <p>Travel</p>
                  </div>
                </div>
                <div className="single-box">
                  <div className="activity-image">
                    <img src={activity2} alt="profile" />
                  </div>
                  <div className="activity-content">
                    <p>Our Adventure</p>
                    <a href="" className="lock-icon"><span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
                        <path d="M1.95786 18.1182H10.4833C11.661 18.1182 12.2411 17.5381 12.2411 16.2549V9.67188C12.2411 8.51172 11.7665 7.92285 10.7821 7.82617V5.65527C10.7821 2.31543 8.55845 0.707031 6.22056 0.707031C3.88267 0.707031 1.65904 2.31543 1.65904 5.65527V7.85254C0.744973 7.99316 0.200051 8.57324 0.200051 9.67188V16.2549C0.200051 17.5381 0.780129 18.1182 1.95786 18.1182ZM3.34654 5.49707C3.34654 3.44922 4.64732 2.32422 6.22056 2.32422C7.78501 2.32422 9.09458 3.44922 9.09458 5.49707V7.80859L3.34654 7.81738V5.49707Z" fill="#1C1C1E" />
                      </svg></span></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
       
  </>
  );
};

export default Profile;