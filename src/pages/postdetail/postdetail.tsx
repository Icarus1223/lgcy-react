import React from 'react';
import { Container , Form , Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Row, Col } from 'react-bootstrap';
import postdetailimg from '../../../src/assets/images/post-detail-img.jpg';

const PostDetail: React.FC = () => {
  return (<>
  <Container fluid>
        <Row className="content-bar-row">
          <Col xs={12} md={12} lg={12} className="main-content">
          <div className="profile-post-detail-outer">
            <div className="backarrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
<path d="M10.62 0.989999C10.5039 0.873591 10.366 0.781234 10.2141 0.718218C10.0622 0.655201 9.89942 0.622765 9.735 0.622765C9.57058 0.622765 9.40778 0.655201 9.25592 0.718218C9.10406 0.781234 8.96612 0.873591 8.85 0.989999L0.540003 9.3C0.447299 9.39251 0.373752 9.5024 0.32357 9.62337C0.273389 9.74435 0.247559 9.87403 0.247559 10.005C0.247559 10.136 0.273389 10.2657 0.32357 10.3866C0.373752 10.5076 0.447299 10.6175 0.540003 10.71L8.85 19.02C9.34 19.51 10.13 19.51 10.62 19.02C11.11 18.53 11.11 17.74 10.62 17.25L3.38 10L10.63 2.75C11.11 2.27 11.11 1.47 10.62 0.989999Z" fill="#111111"/>
</svg>
            </div>
            <div className="profile-post-detail">
              <div className="profile-post-image">
                <img src={postdetailimg} alt="profile" />
              </div>
              <div className="profile-post-content">
                <div className="post-heading">
                  <h4>katiemorrison  </h4>
                  <div className="post-threedot-icon">

                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic" className="post-option-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="6" viewBox="0 0 19 6" fill="none">
                          <path d="M2.96055 5.2C2.27721 5.2 1.70221 4.96667 1.23555 4.5C0.76888 4.03333 0.535547 3.45 0.535547 2.75C0.535547 2.03333 0.76888 1.45833 1.23555 1.025C1.70221 0.575 2.27721 0.35 2.96055 0.35C3.64388 0.35 4.21888 0.575 4.68555 1.025C5.15221 1.45833 5.38555 2.03333 5.38555 2.75C5.38555 3.45 5.15221 4.03333 4.68555 4.5C4.21888 4.96667 3.64388 5.2 2.96055 5.2ZM9.50352 5.2C8.82018 5.2 8.24518 4.96667 7.77852 4.5C7.31185 4.03333 7.07852 3.45 7.07852 2.75C7.07852 2.03333 7.31185 1.45833 7.77852 1.025C8.24518 0.575 8.82018 0.35 9.50352 0.35C10.1868 0.35 10.7618 0.575 11.2285 1.025C11.6952 1.45833 11.9285 2.03333 11.9285 2.75C11.9285 3.45 11.6952 4.03333 11.2285 4.5C10.7618 4.96667 10.1868 5.2 9.50352 5.2ZM16.0465 5.2C15.3632 5.2 14.7882 4.96667 14.3215 4.5C13.8548 4.03333 13.6215 3.45 13.6215 2.75C13.6215 2.03333 13.8548 1.45833 14.3215 1.025C14.7882 0.575 15.3632 0.35 16.0465 0.35C16.7298 0.35 17.3048 0.575 17.7715 1.025C18.2382 1.45833 18.4715 2.03333 18.4715 2.75C18.4715 3.45 18.2382 4.03333 17.7715 4.5C17.3048 4.96667 16.7298 5.2 16.0465 5.2Z" fill="black" />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="post-decr">
                  <p>
                    Our Life Adventure</p>
                </div>
                <div className="post-date-place">
                  <div className="post-info post-date">
                    <span>
                      April 12, 2015 </span>
                  </div>
                  <div className="post-info post-place">
                    <span> Venice Beach, California</span>
                  </div>
                </div>
                <div className="post-caption">
                  <h6><span>katiemorrison</span>  This is the caption. This is the caption</h6>
                </div>
                <div className="post-comment post-caption">
                  <div className="single-post-comment">
                    <h6><span>username</span>  This is the comment.</h6>
                  </div>
                </div>
                <div className="user-comment-footer">
                  <div className="user-comment-like-outer">
                    <div className="like-icon">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
<path d="M15.6875 0C13.7516 0 12.0566 0.8325 11 2.23969C9.94344 0.8325 8.24844 0 6.3125 0C4.77146 0.00173694 3.29404 0.614681 2.20436 1.70436C1.11468 2.79404 0.501737 4.27146 0.5 5.8125C0.5 12.375 10.2303 17.6869 10.6447 17.9062C10.7539 17.965 10.876 17.9958 11 17.9958C11.124 17.9958 11.2461 17.965 11.3553 17.9062C11.7697 17.6869 21.5 12.375 21.5 5.8125C21.4983 4.27146 20.8853 2.79404 19.7956 1.70436C18.706 0.614681 17.2285 0.00173694 15.6875 0ZM11 16.3875C9.28812 15.39 2 10.8459 2 5.8125C2.00149 4.66921 2.45632 3.57317 3.26475 2.76475C4.07317 1.95632 5.16921 1.50149 6.3125 1.5C8.13594 1.5 9.66687 2.47125 10.3062 4.03125C10.3628 4.16881 10.4589 4.28646 10.5824 4.36926C10.7059 4.45207 10.8513 4.49627 11 4.49627C11.1487 4.49627 11.2941 4.45207 11.4176 4.36926C11.5411 4.28646 11.6372 4.16881 11.6937 4.03125C12.3331 2.46844 13.8641 1.5 15.6875 1.5C16.8308 1.50149 17.9268 1.95632 18.7353 2.76475C19.5437 3.57317 19.9985 4.66921 20 5.8125C20 10.8384 12.71 15.3891 11 16.3875Z" fill="#111111"/>
</svg> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z" fill="#111111" stroke="black" />
                      </svg>
                    </div>
                    <span>10 Likes</span>
                  </div>
                  <div className="comment-form">
                    <Form>
                      <div className="comment-field">
                        <Form.Group className="" controlId="formBasicText">
                          <Form.Control type="text" placeholder="Comment..." />
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
            </div>
          </Col>
        </Row>
        </Container>
  </>
  );
};

export default PostDetail;