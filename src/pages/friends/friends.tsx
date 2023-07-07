import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
import profileimgcircle from '../../assets/images/profile-img-circle.png';
import { Link } from 'react-router-dom';


const Friends: React.FC = () => {
  return (<>
        <Row className="content-bar-row">
          <Col xs={12} md={12} lg={12} className="main-content">
            <div className="friend-main">
                <div className="friend-search-chat">
                    <span>Chat</span>
                    <div className="search-bar-form">
              <Form className="">
                <FormControl
                  type="text"
                  placeholder="Search"
                />
                
                {/* <Button type="submit">Search</Button> */}
              </Form>
            </div>
                </div>

                <div className="all-chat-list">
                  <Link to="/chats">
                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>
                </Link>
                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                <div className="single-chat-list-box">
                    <div className="prof-img">
                        <img src={profileimgcircle} alt="profile"/>
                        </div>
                        <div className="user-small-info">
                <p className="u-desc">Welcome to my life adventure</p>
                </div>
                </div>

                
                </div>
            </div>
          </Col>
        </Row>
  </>

  );
};

export default Friends;
