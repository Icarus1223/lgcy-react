import React from "react";
import {Row, Col} from "react-bootstrap";
import exploreimg1 from "../../assets/images/explore1.jpg";
import exploreimg2 from "../../assets/images/explore2.jpg";
import exploreimg3 from "../../assets/images/explore3.jpg";
import exploreimg4 from "../../assets/images/explore4.jpg";
import exploreimg5 from "../../assets/images/explore5.jpg";
import exploreimg6 from "../../assets/images/explore6.jpg";

const Explore: React.FC = () => {
    return (
        <>
            <Row className="content-bar-row">
                <Col xs={12} md={12} lg={12} className="main-content">
                    <div className="explore-main-area">
                        <div className="explore-heading">
                            <h3>Explore</h3>
                        </div>
                        <div className="explore-main-box">
                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg1} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>

                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg2} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>

                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg3} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>
                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg4} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>
                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg5} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>
                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg6} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>
                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg1} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>

                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg2} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>

                            <div className="explore-single-box">
                                <div className="explore-single-img">
                                    <img src={exploreimg3} alt="" />
                                </div>
                                <div className="single-explore-name">
                                    <h4>katiemorrison</h4>
                                    <span> Our Life Adventure</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Explore;
