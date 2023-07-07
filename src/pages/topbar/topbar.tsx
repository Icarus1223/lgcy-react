import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import {Form, FormControl} from "react-bootstrap";
import searchicon from "../../../src/assets/images/search-icon.png";
import "../../../src/fonts/fonts.css";
import {profileData} from "../../data";
import {useNavigate} from "react-router-dom";

const Topbar: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (e: any) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

        const filteredProfiles = profileData.filter((profile) =>
            profile.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        const suggestionList: any = filteredProfiles.map((profile) => ({
            id: profile.id,
            name: profile.name,
            userImage: profile.userImage,
        }));

        setSuggestions(suggestionList);
    };

    const handleSuggestionClick = (profileId: any) => {
        navigate(`/profile/${profileId}`);
        setSearchText("");
        setSuggestions([]);
    };

    // const handleClearClick = () => {
    //     setSearchText("");
    //     setSuggestions([]);
    // };

    return (
        <div className="top-bar">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="search-bar-form">
                            <Form className="">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    value={searchText}
                                    onChange={handleSearchChange}
                                />
                                <div className="search-icon">
                                    <img src={searchicon} alt="searchicon" className="searchicon" />
                                </div>
                                {searchText && (
                                    <div className="search-suggestions">
                                        {suggestions.map((profile: any) => (
                                            <div
                                                key={profile.id}
                                                onClick={() => handleSuggestionClick(profile.id)}
                                                className="search-suggestion"
                                            >
                                                <img src={profile.userImage} alt={profile.name} height="10px" width="10px"/>
                                                <span>{profile.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {/* {searchText && (
                                    <div className="clear-search" onClick={handleClearClick}>
                                        Clear
                                    </div>
                                )} */}
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
