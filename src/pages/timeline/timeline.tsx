import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {profileData} from "../../data";

const Timeline = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id}: any = useParams();

    const selectedImage = profileData[0].images.find((image) => image.id === parseInt(id));

    return (
        <>
        <div className="content-outer">
            <Row className="content-bar-row">
                <Col xs={12} md={12} lg={12} className="main-content">
                    <div className=" timeline-pictures profile-main">
                        <div className="profile-heading">
                            <h5>{selectedImage && selectedImage.username}</h5>
                        </div>
                        <div className="profil-img-content">
                            <div className="prof-img">
                                <img src={selectedImage && selectedImage.imageUrl} alt="profile" />
                            </div>
                            <div className="user-small-info">
                                <h4 className="u-name">{selectedImage && selectedImage.imageTitle}</h4>
                                <p className="u-desc">Welcome to my life adventure</p>
                            </div>
                        </div>
                        <div className="user-activity-image-box">
                            {selectedImage &&
                                selectedImage.relatedImages.map((image) => (
                                    <div className="single-box" key={image.id}>
                                        <div className="activity-image">
                                            <Link to={`/postdetail/${image.id}`}>
                                                <img src={image.imageUrl} alt="profile" />
                                            </Link>
                                        </div>
                                        {/* <div className="activity-content">
                                        <p>{image.imageTitle}</p>
                                    </div> */}
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

export default Timeline;
