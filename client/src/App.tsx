import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import FindTeamMates from './components/FindTeamMates';
import About from './About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EditProfile from './components/Editprofile';
import MainPage from './components/MainPage';
import Hackathons from './components/Hackathons';
import { Toaster } from './components/ui/toaster';
import AdminPage from './components/AdminPage';

const App: React.FC = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

const Layout: React.FC = () => {
    const location = useLocation();

    // List of routes where the navbar and footer should not be displayed
    const noNavbarRoutes = ['/register', '/'];
    const noFooterRoutes = ['/register', '/'];

    // Check if the current route should hide the navbar and footer
    const showNavbar = !noNavbarRoutes.includes(location.pathname);
    const showFooter = !noFooterRoutes.includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {showNavbar && <Navbar />}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<MainPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/buildteam" element={<FindTeamMates />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/hackathons" element={<Hackathons />} />
                </Routes>
            </main>
            <Toaster />
            {showFooter && <Footer />}
        </div>
    );
};

export default App;
