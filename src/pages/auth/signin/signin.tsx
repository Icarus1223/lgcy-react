import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './signin.css';
import logo from '../../../assets/images/logo.png';
import playstore from '../../../assets/images/play-store.png';
import appstore from '../../../assets/images/app-store.png';
import ShareYourStory from '../../../assets/images/ShareYourStory.png'
import { setUsername, setPassword, resetForm } from '../../../redux/actions/signinActions';
import Footer from '../../../components/GlobalComponent/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../../../src/fonts/fonts.css'; // Import the custom fonts CSS file
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
  const { username, password } = useSelector((state: any) => state.signin);
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    dispatch(resetForm());
  };

  return (<>
    <div className="signin-outter">
      <div className="signin-inner">
        <div className="signin-container">
          <Container>
            <Row className="sign-in-row">
              <Col lg={1}>
              </Col>
              <Col lg={5}>
                <div className="signin-left">
                  <div className="signin-logo">
                    <img src={logo} alt="Logo" className="logo" />
                  </div>
                  {/* <form className="signin-form" onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Sign In</button>
      </form> */}
                  <div className="signin-form">
                    <Form>
                      <Form.Group className="mb-3 input-field" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter or username" />
                      </Form.Group>
                      <Form.Group className="mb-3 input-field" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" className="sign-in-btn">
                        <Link to="/dashboard" className="link-button">Sign In</Link>
                      </Button>
                      <div className="signup-link">
                        <p>Don't have an account? <Link to="/Signup"> Signup</Link></p>
                      </div>
                    </Form>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className="signin-right">
                  <div className="share-story-text">
                    <h1>
                      Share <br />Your  <br />Story
                    </h1>
                  </div>
                </div>
              </Col>
              <Col lg={1}>
              </Col>
              <Row>
                <Col>

                  <div className="download-buttons">
                    <a href="https://example.com"><img src={appstore} alt="Logo" className="app-store" /></a>
                    <a href="https://example.com"><img src={playstore} alt="Logo" className="playstore" /></a>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>

        </div>
        <Footer />
      </div>
    </div>
  </>
  );
};

export default Signin;
