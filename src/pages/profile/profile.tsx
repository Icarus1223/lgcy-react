import React from "react";
import {Row, Col} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {profileData} from "../../data";

const Profile: React.FC = () => {
    const { id }:any = useParams();

    const profile = profileData.find((profile) => profile.id === parseInt(id));

    return (
        <>
         <div className="content-outer">
            <Row className="content-bar-row">
                <Col xs={12} md={12} lg={12} className="main-content">
                    <div className="profile-main">
                        <div className="profile-heading">
                            <h5>{profile && profile.name}</h5>
                        </div>
                        <div className="profil-img-content">
                            <div className="prof-img">
                                <img src={profile && profile.userImage} alt="profile" />
                            </div>
                            <div className="user-small-info">
                                <h4 className="u-name">{profile && profile.title}</h4>
                                <p className="u-desc">Welcome to my life adventure</p>
                            </div>
                        </div>
                        <div className="user-activity-image-box">
                            {profile && profile.images.map((image) => (
                                <div className="single-box" key={image.id}>
                                    <div className="activity-image">
                                        <Link to={`/timeline/${image.id}`}>
                                            <img src={image.imageUrl} alt="profile" />
                                        </Link>
                                    </div>
                                    <div className="activity-content">
                                        <p>{image.imageTitle}</p>
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

export default Profile;
