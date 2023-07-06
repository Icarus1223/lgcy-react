import React from "react";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col} from "react-bootstrap";
import {Form, Button} from "react-bootstrap";
import "../../../src/fonts/fonts.css";
import {postData} from "../../data";

const DashBoard: React.FC = () => {
    return (
        <>
                    <Row className="content-bar-row">
                        <Col xs={12} md={12} lg={12} className="main-content">
                            <div className="all-feeds-lists">
                                {postData.map((location, index) => (
                                    <div className="single-feed-outer" key={index}>
                                        <div className="feed-name-slog">
                                            <h4>{location.name}</h4>
                                            <span>{location.title}</span>
                                        </div>
                                        <div className="feed-img">
                                            <img src={location.image} alt={location.name} className="searchicon" />
                                        </div>
                                        <div className="feed-content-outer">
                                            <div className="feed-likes">
                                                <div className="like-icon">
                                                    <a href="">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="19"
                                                            viewBox="0 0 20 19"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z"
                                                                fill="#111111"
                                                                stroke="black"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="feed-name-slog">
                                                    <h4>{location.comments.length} Likes</h4>
                                                </div>
                                            </div>
                                            <div className="feed-caption-outer">
                                                <div className="feed-uname">
                                                    <h4><span>{location.name}</span> {location.description}</h4>
                                                </div>
                                            </div>
                                            <div className="feed-comment-outer">
                                                {location.comments.map((comment, commentIndex) => (
                                                    <div className="feed-comment" key={commentIndex}>
                                                        <div className="feed-uname">
                                                            <h4><span>{comment.user} </span> {comment.comment}</h4>
                                                        </div>
                                                        {/* <div className="feed-caption">
                                                            <p>{comment.comment}</p>
                                                        </div> */}
                                                    </div>
                                                ))}
                                                <div className="feed-comment more-comment">
                                                    <div className="feed-caption">
                                                        <p>
                                                            <a href="">View More Comment</a>
                                                        </p>
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
                                ))}
                            </div>
                        </Col>
                    </Row>
        </>
    );
};

export default DashBoard;
