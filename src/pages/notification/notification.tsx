import React from "react";
import {Row, Col} from "react-bootstrap";
import {notificationData} from "../../data";

const Notification: React.FC = () => {
    return (
        <>
            <Row className="content-bar-row">
                <Col xs={12} md={12} lg={12} className="main-content">
                    <div className="notifications-content-area">
                        <div className="all-notifications-lists">
                            <h3>Notifications</h3>
                            <div className="notification-content">
                                {notificationData.map((notification, index) => (
                                    <div className="single-notification" key={index}>
                                        <div className="user-profile-pic">
                                            <img
                                                src={notification.user.image}
                                                alt="searchicon"
                                                className="searchicon"
                                            />
                                        </div>
                                        <div className="user-activity-on-post">
                                            <h6>
                                                <span className="notif-user-name">{notification.user.name}</span>{" "}
                                                {notification.title}
                                            </h6>
                                        </div>
                                        <div className="post-image">
                                            <img
                                                src={notification.notificationImage}
                                                alt="notifpostimage"
                                                className=""
                                            ></img>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Notification;
