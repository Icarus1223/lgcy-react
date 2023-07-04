import React from 'react';
import Topbar from '../topbar/topbar';
import Sidebar from '../sidebar/sidebar';
import { Form, FormControl, Button } from 'react-bootstrap'; 
import Dropdown from 'react-bootstrap/Dropdown';  
import { Container, Row, Col } from 'react-bootstrap';
import postdetailimg from '../../../src/assets/images/post-detail-img.jpg';
import likesvg from '../../../src/assets/images/like.svg';

const PostDetail: React.FC = () => {
    return ( <>
        <Container>
          <div className="content-oute1r">
            <Row  className="content-bar-row">
              <Col xs={12} md={9} lg={12} className="main-content">
                  <div className="profile-post-detail">
                  <div className="profile-post-image">
                  <img src={postdetailimg} alt="profile"/>
                  </div>
                  <div className="profile-post-content">
                    <div className="post-heading">
                      <h4>katiemorrison  </h4>
      <div className="post-threedot-icon">
    
      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="post-option-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="6" viewBox="0 0 19 6" fill="none">
      <path d="M2.96055 5.2C2.27721 5.2 1.70221 4.96667 1.23555 4.5C0.76888 4.03333 0.535547 3.45 0.535547 2.75C0.535547 2.03333 0.76888 1.45833 1.23555 1.025C1.70221 0.575 2.27721 0.35 2.96055 0.35C3.64388 0.35 4.21888 0.575 4.68555 1.025C5.15221 1.45833 5.38555 2.03333 5.38555 2.75C5.38555 3.45 5.15221 4.03333 4.68555 4.5C4.21888 4.96667 3.64388 5.2 2.96055 5.2ZM9.50352 5.2C8.82018 5.2 8.24518 4.96667 7.77852 4.5C7.31185 4.03333 7.07852 3.45 7.07852 2.75C7.07852 2.03333 7.31185 1.45833 7.77852 1.025C8.24518 0.575 8.82018 0.35 9.50352 0.35C10.1868 0.35 10.7618 0.575 11.2285 1.025C11.6952 1.45833 11.9285 2.03333 11.9285 2.75C11.9285 3.45 11.6952 4.03333 11.2285 4.5C10.7618 4.96667 10.1868 5.2 9.50352 5.2ZM16.0465 5.2C15.3632 5.2 14.7882 4.96667 14.3215 4.5C13.8548 4.03333 13.6215 3.45 13.6215 2.75C13.6215 2.03333 13.8548 1.45833 14.3215 1.025C14.7882 0.575 15.3632 0.35 16.0465 0.35C16.7298 0.35 17.3048 0.575 17.7715 1.025C18.2382 1.45833 18.4715 2.03333 18.4715 2.75C18.4715 3.45 18.2382 4.03333 17.7715 4.5C17.3048 4.96667 16.7298 5.2 16.0465 5.2Z" fill="black"/>
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
                      <h6><b>katiemorrison</b>  This is the caption. This is the caption</h6>
                      </div>
                      <div className="post-comment">
      <div className="single-post-comment">
        <span><b>username</b>  This is the comment.</span>
      </div>
                      </div>
                      <div className="user-comment-footer">
                      <div className="user-comment-like-outer">
      <div className="like-icon">
      <img src={likesvg} alt="like-icon" />
      </div>
      <span>10 Likes</span>
                      </div>
                      <div className="comment-form">
                      <Form>
                        <div className="comment-field">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Comment..." />
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
            </div>
          </Container>
          </>
    );
  };

export default PostDetail;