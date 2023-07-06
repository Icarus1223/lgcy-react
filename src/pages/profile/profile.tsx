import React from 'react';
import { Row, Col } from 'react-bootstrap';
import profileimgcircle from '../../../src/assets/images/profile-img-circle.png';
import activity1 from '../../../src/assets/images/activity1.jpg';
import activity2 from '../../../src/assets/images/activity2.jpg';
import { Link } from 'react-router-dom';
import { profileData } from '../../data';

const Profile: React.FC = () => {
  return (<>
        <Row className="content-bar-row">
      <Col xs={12} md={12} lg={12} className="main-content">
        <div className="profile-main">
          <div className="profile-heading">
            <h5>{profileData[0].name}</h5>
          </div>
          <div className="profil-img-content">
            <div className="prof-img">
              <img src={profileData[0].userImage} alt="profile" />
            </div>
            <div className="user-small-info">
              <h4 className="u-name">{profileData[0].title}</h4>
              <p className="u-desc">Welcome to my life adventure</p>
            </div>
          </div>
          <div className="user-activity-image-box">
            {profileData[0].images.map((image) => (
              <div className="single-box" key={image.id}>
                <div className="activity-image">
                  <Link to={`/postdetail/${image.id}`}>
                    <img src={image.imageUrl} alt="profile" />
                  </Link>
                </div>
                <div className="activity-content">
                  <p>{image.imageTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  </>
  );
};

export default Profile;