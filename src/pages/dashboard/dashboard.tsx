import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
import hearticon from '../../../src/assets/images/heart.png';
import feedfirst from '../../../src/assets/images/destination1.jpg';
import '../../../src/fonts/fonts.css'; // Import the custom fonts CSS file
import Topbar from '../topbar/topbar';
import Sidebar from '../sidebar/sidebar';


const DashBoard: React.FC = () => {
  return (<>
    <Topbar />
    <Container>
      <div className="content-outer">
        <Row className="content-bar-row">
          <Col xs={12} md={12} lg={12} className="main-content">
            <div className="all-feeds-lists">
              <div className='single-feed-outer'>
                <div className="feed-name-slog">
                  <h4>katiemorrison</h4>
                  <span> Our Life Adventure</span>
                </div>
                <div className="feed-img">
                  <img src={feedfirst} alt="searchicon" className="searchicon" />
                </div>
                <div className="feed-content-outer">
                  <div className="feed-likes">
                    <div className="like-icon">
                      <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                          <path d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z" fill="#111111" stroke="black" />
                        </svg>
                      </a>
                    </div>
                    <div className="feed-name-slog">
                      <h4>129 Likes</h4>
                    </div>

                  </div>
                  <div className="feed-caption-outer">
                    <div className="feed-uname">
                      <h4>katiemorrison</h4>
                    </div>
                    <div className="feed-caption">
                      <p>This is the caption</p>
                    </div>
                  </div>
                  <div className="feed-comment-outer">
                    <div className="feed-comment">
                      <div className="feed-uname">
                        <h4>katiemorrison</h4>
                      </div>
                      <div className="feed-caption">
                        <p>Amazing Photo</p>
                      </div>
                    </div>
                    <div className="feed-comment">
                      <div className="feed-uname">
                        <h4>katiemorrison</h4>
                      </div>
                      <div className="feed-caption">
                        <p>Sweet Picture</p>
                      </div>
                    </div>
                    <div className="feed-comment">
                      <div className="feed-uname">
                        <h4>katiemorrison</h4>
                      </div>
                      <div className="feed-caption">
                        <p>Awesome Photo</p>
                      </div>
                    </div>
                    <div className="feed-comment more-comment">
                      <div className="feed-caption">
                        <p><a href="">View More Comment</a></p>
                      </div>
                    </div>
                    <div className="feed-comment feed-post-date">
                      <div className="feed-caption">
                        <p>27 May 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="feed-form comment-form ">
                    <Form>
                      <div className="comment-field">
                        <Form.Group className="" controlId="formBasicText">
                          <Form.Control type="text" placeholder="Add a Comment..." />
                        </Form.Group>
                        <Button variant="" type="submit" className="sub-bnt-comnt">
                          Post
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>

              <div className='single-feed-outer'>
                <div className="feed-name-slog">
                  <h4>katiemorrison</h4>
                  <span> Our Life Adventure</span>
                </div>
                <div className="feed-img">
                  <img src={feedfirst} alt="searchicon" className="searchicon" />
                </div>
                <div className="feed-content-outer">
                  <div className="feed-likes">
                    <div className="like-icon">
                      <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                          <path d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z" fill="#111111" stroke="black" />
                        </svg>
                      </a>
                    </div>
                    <div className="feed-name-slog">
                      <h4>2 Likes</h4>
                    </div>

                  </div>
                  <div className="feed-caption-outer">
                    <div className="feed-uname">
                      <h4>katiemorrison</h4>
                    </div>
                    <div className="feed-caption">
                      <p>This is the caption</p>
                    </div>
                  </div>
                  <div className="feed-comment-outer">
                    <div className="feed-comment">
                      <div className="feed-uname">
                        <h4>katiemorrison</h4>
                      </div>
                      <div className="feed-caption">
                        <p>Amazing Photo</p>
                      </div>
                    </div>
                    <div className="feed-comment">
                      <div className="feed-uname">
                        <h4>katiemorrison</h4>
                      </div>
                      <div className="feed-caption">
                        <p>Sweet Picture</p>
                      </div>
                    </div>
                    <div className="feed-comment">
                      <div className="feed-uname">
                        <h4>katiemorrison</h4>
                      </div>
                      <div className="feed-caption">
                        <p>Awesome Photo</p>
                      </div>
                    </div>
                    <div className="feed-comment more-comment">
                      <div className="feed-caption">
                        <p><a href="">View More Comment</a></p>
                      </div>
                    </div>
                    <div className="feed-comment feed-post-date">
                      <div className="feed-caption">
                        <p>27 May 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="feed-form comment-form ">
                    <Form>
                      <div className="comment-field">
                        <Form.Group className="" controlId="formBasicText">
                          <Form.Control type="text" placeholder="Add a Comment..." />
                        </Form.Group>
                        <Button variant="" type="submit" className="sub-bnt-comnt">
                          Post
                        </Button>
                      </div>
                    </Form>
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

export default DashBoard;
