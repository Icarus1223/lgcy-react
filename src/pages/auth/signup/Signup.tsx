import React, {FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap"; // Import Container, Row, and Col components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../../../src/fonts/fonts.css"; // Import the custom fonts CSS file
import {Link} from "react-router-dom";
import "../signin/signin.css";
import logo from "../../../assets/images/logo.png";
import playstore from "../../../assets/images/play-store.png";
import appstore from "../../../assets/images/app-store.png";
import Footer from "../../../components/GlobalComponent/footer/footer";
import {
    updateUsername,
    updateDateOfBirth,
    updateNumber,
    updateEmail,
    updateName,
} from "../../../redux/actions/signupAction";

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    const {username, dateOfBirth, number, email, name} = useSelector((state: any) => state.signup);

    const handleInputChange = (e: any, inputName: string) => {
        const {value} = e.target;
        switch (inputName) {
            case "username":
                dispatch(updateUsername(value));
                break;
            case "dateOfBirth":
                dispatch(updateDateOfBirth(value));
                break;
            case "number":
                dispatch(updateNumber(value));
                break;
            case "email":
                dispatch(updateEmail(value));
                break;
            case "name":
                dispatch(updateName(value));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        //form submission data
        const formData = {
            username,
            dateOfBirth,
            number,
            email,
            name,
        };

        console.log(formData);
    };

    return (
        <>
            <div className="signin-outter">
                <div className="signin-inner">
                    <div className="signin-container">
                        <Container>
                            <Row className="sign-in-row">
                                <Col lg={1}></Col>

                                <Col lg={5}>
                                    <div className="signin-left">
                                        <div className="signin-logo">
                                            <img src={logo} alt="Logo" className="logo" />
                                        </div>
                                        <div className="signin-form">
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3 input-field" controlId="formGroupPassword">
                                                    <Form.Control
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => handleInputChange(e, "name")}
                                                        placeholder="Name"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3 input-field" controlId="formGroupText">
                                                    <Form.Control
                                                        type="text"
                                                        value={username}
                                                        onChange={(e) => handleInputChange(e, "username")}
                                                        placeholder="User Name"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3 input-field" controlId="formGroupPassword">
                                                    <Form.Control
                                                        type="date"
                                                        value={dateOfBirth}
                                                        onChange={(e) => handleInputChange(e, "dateOfBirth")}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3 input-field" controlId="formGroupPassword">
                                                    <Form.Control
                                                        type="tel"
                                                        value={number}
                                                        onChange={(e) => handleInputChange(e, "number")}
                                                        placeholder="Phone No"
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3 input-field" controlId="formGroupEmail">
                                                    <Form.Control
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => handleInputChange(e, "email")}
                                                        placeholder="Email"
                                                    />
                                                </Form.Group>

                                                <Button variant="primary" type="submit" className="sign-in-btn">
                                                    <Link to="/Dashboard"> Sign Up </Link>
                                                </Button>
                                                <div className="signup-link">
                                                    <p>
                                                        Already have an account ?<Link to="/"> Signin</Link>
                                                    </p>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className="signin-right">
                                        <div className="share-story-text">
                                            <h1>
                                                Share <br />
                                                Your <br />
                                                Story
                                            </h1>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={1}></Col>
                                <Row>
                                    <Col>
                                        <div className="download-buttons">
                                            <a href="https://example.com">
                                                <img src={appstore} alt="Logo" className="app-store" />
                                            </a>
                                            <a href="https://example.com">
                                                <img src={playstore} alt="Logo" className="playstore" />
                                            </a>
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

export default Signup;
