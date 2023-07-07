import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./pages/auth/signin/signin";
import DashBoard from "./pages/dashboard/dashboard";
import Notification from "./pages/notification/notification";
import PostDetail from "./pages/postdetail/postdetail";
import Profile from "./pages/profile/profile";
import Explore from "./pages/explore/explore";
import Signup from "./pages/auth/signup/Signup";
import Friends from "./pages/friends/friends";
import Timeline from "./pages/timeline/timeline";
import Topbar from "./pages/topbar/topbar";
import Sidebar from "./pages/sidebar/sidebar";
import {Container} from "react-bootstrap";
import Chats from "./pages/friends/chat";

function App() {
    const location = useLocation();
    const isProfilePage = location.pathname.startsWith("/profile");
    const isTimelinePage = location.pathname.startsWith("/timeline");
    const isFixedTopbar = isProfilePage || isTimelinePage;
    const isFixedSidebar =
        isFixedTopbar ||
        ["/dashboard", "/notification", "/postdetail/:id", "/timeline/:id", "/explore", "/friends"].includes(
            location.pathname
        );

    return (
        <div className="App">
            <Container fluid>
                <div className="content-outer">
                    {isFixedTopbar && <Topbar />}
                    {isFixedSidebar && <Topbar />}
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/dashboard" element={<DashBoard />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/postdetail/:id" element={<PostDetail />} />
                        <Route path="/timeline/:id" element={<Timeline />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/chat" element={<Chats />} />
                    </Routes>
                    {isFixedSidebar && <Sidebar />}
                </div>
            </Container>
        </div>
    );
}

export default App;
