import React from "react";
import {Row, Col} from "react-bootstrap";
import {exploreData} from "../../data";

const Explore: React.FC = () => {
    return (
        <>
         <div className="content-outer">
            <Row className="content-bar-row">
                <Col xs={12} md={12} lg={12} className="main-content">
                    <div className="explore-main-area">
                        <div className="explore-heading">
                            <h3>Explore</h3>
                        </div>
                        <div className="explore-main-box">
                            {exploreData.map((item, index) => (
                                <div className="explore-single-box" key={index}>
                                    <div className="explore-single-img">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="single-explore-name">
                                        <h4>{item.title}</h4>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
        </>
    );
};

export default Explore;
