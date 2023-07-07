import React, {useState} from "react";
import {Row, Col} from "react-bootstrap";
import {Form, FormControl, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {friendsData} from "../../data";

const Friends: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const filteredFriends = friendsData.filter((friend) =>
        friend.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleClick = () => {
        navigate("/chat");
    };

    //  friend list
    const friendList = filteredFriends.map((friend, index) => (
        <div className="single-chat-list-box" key={index}>
            <div className="prof-img">
                <img src={friend.image} alt="profile" />
            </div>
            <div className="user-small-info" onClick={handleClick}>
                <p className="u-desc">{friend.title}</p>
            </div>
        </div>
    ));

    return (
        <>
            <Row className="content-bar-row">
                <Col xs={12} md={12} lg={12} className="main-content">
                    <div className="friend-main">
                        <div className="friend-search-chat">
                            <span>Chat</span>
                            <div className="search-bar-form">
                                <Form className="">
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />

                                    {/* <Button type="submit">Search</Button> */}
                                </Form>
                            </div>
                        </div>

                        <div className="all-chat-list">{friendList}</div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Friends;
