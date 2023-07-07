import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
import './chat.css';
import sendmsgicon from '../../assets/images/sendmsg-icon.png';
const Chats: React.FC = () => {
  return (<>
        <Row className="">
          <Col xs={12} md={12} lg={12} className="main-content">
            <div className="chat-box-main">
               <div className="chat-box-outer">
                <div className="heading-box">
                <div className="backarrow"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none"><path d="M10.62 0.989999C10.5039 0.873591 10.366 0.781234 10.2141 0.718218C10.0622 0.655201 9.89942 0.622765 9.735 0.622765C9.57058 0.622765 9.40778 0.655201 9.25592 0.718218C9.10406 0.781234 8.96612 0.873591 8.85 0.989999L0.540003 9.3C0.447299 9.39251 0.373752 9.5024 0.32357 9.62337C0.273389 9.74435 0.247559 9.87403 0.247559 10.005C0.247559 10.136 0.273389 10.2657 0.32357 10.3866C0.373752 10.5076 0.447299 10.6175 0.540003 10.71L8.85 19.02C9.34 19.51 10.13 19.51 10.62 19.02C11.11 18.53 11.11 17.74 10.62 17.25L3.38 10L10.63 2.75C11.11 2.27 11.11 1.47 10.62 0.989999Z" fill="#111111"></path></svg></div>
                    <span>Rachelmorrison</span>
                </div>
                <div className="chat-box-inner">
                <div className="chat-box">
                <div className="chat user-chat">
                    <div className="chat-message">
                    <p>
                  Hey. This is a demo of the tex.  This is the demo of the text. This is the demo of the text. This is the demo of the text
                  </p>
                    </div>
                    <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat another-user-chat">
                <div className="chat-message">
                  <p>
                  Hey. This is a demo of the text.
                  </p>
                </div>
                <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>

                <div className="chat user-chat">
                    <div className="chat-message">
                    <p>
                  This is the demo of the text. This is the demo of the text
                  </p>
                    </div>
                    <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat another-user-chat">
                <div className="chat-message">
                  <p>
                 text
                  </p>
                </div>
                <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat user-chat">
                    <div className="chat-message">
                    <p>
                  Hey This is the demo of the text
                  </p>
                    </div>
                    <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat another-user-chat">
                <div className="chat-message">
                  <p>
                  This is the demo of the text. This is the demo of the text. This is the demo of the text
                  </p>
                </div>
                <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat user-chat">
                    <div className="chat-message">
                    <p>
                  Hey. This is a demo of the text. This is the demo of the text
                  </p>
                    </div>
                    <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat another-user-chat">
                <div className="chat-message">
                  <p>
                  Hey. This is a demo of the text.
                  </p>
                </div>
                </div>
                <div className="chat user-chat">
                    <div className="chat-message">
                    <p>
                   This is the demo of the text. This is the demo of the text
                  </p>
                    </div>
                    <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                <div className="chat another-user-chat">
                <div className="chat-message">
                  <p>
                  Thanks </p>
                </div>
                <div className="chat-time">
                        <span>9:25 AM</span>
                    </div>
                </div>
                    </div>
                    </div>
                    <div className="send-message-box">
                    <Form>
                                            <div className="comment-field">
                                                <Form.Group className="message-enter" controlId="formBasicText">
                                                    <Form.Control type="text" placeholder="Message..." />
                                                </Form.Group>
                                                <Button variant="" type="submit" className="sub-bnt-comnt">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M22.9902 3.59805e-07C22.8682 0.0148014 22.7505 0.054045 22.644 0.115385L0.490154 12.1154C0.333105 12.2021 0.205061 12.3332 0.121986 12.4922C0.0389102 12.6512 0.00447832 12.8311 0.0229829 13.0096C0.0414875 13.188 0.11211 13.3571 0.226045 13.4957C0.339981 13.6343 0.492189 13.7363 0.663692 13.7889L6.54831 15.5483C6.68585 16.6366 7.29877 21.3498 7.41323 22.2692C7.52769 23.1849 8.14985 23.3437 8.76923 22.5C9.18831 21.9286 11.6529 18.4615 11.6538 18.4615L16.9043 23.712C17.0174 23.8254 17.1583 23.9071 17.3128 23.9489C17.4674 23.9907 17.6303 23.9911 17.7851 23.9502C17.9399 23.9093 18.0812 23.8283 18.1949 23.7156C18.3086 23.6028 18.3907 23.4622 18.4329 23.3077L23.9714 1.15385C24.0116 1.00983 24.0158 0.858145 23.9837 0.712108C23.9516 0.566071 23.8842 0.430139 23.7873 0.316235C23.6905 0.202331 23.5671 0.113934 23.4281 0.0587991C23.2892 0.00366385 23.1388 -0.016526 22.9902 3.59805e-07ZM21.6646 2.712L17.0197 21.2889L11.7988 16.0671L19.3846 5.53846L7.58677 13.9615L3.28892 12.6923L21.6628 2.71108L21.6646 2.712Z" fill="#111111"/>
</svg>
                                                </Button>
                                            </div>
                                        </Form>

                    </div>
                </div>
                </div>
          </Col>
        </Row>
  </>

  );
};

export default Chats;
