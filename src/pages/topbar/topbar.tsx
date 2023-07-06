import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import {Form, FormControl} from "react-bootstrap";
import searchicon from "../../../src/assets/images/search-icon.png";
import "../../../src/fonts/fonts.css"; // Import the custom fonts CSS file

const Topbar: React.FC = () => {
    return (
        <div className="top-bar">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="search-bar-form">
                            <Form className="">
                                <FormControl type="text" placeholder="Search" />
                                <div className="search-icon">
                                    <img src={searchicon} alt="searchicon" className="searchicon" />
                                </div>
                                {/* <Button type="submit">Search</Button> */}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topbar;
