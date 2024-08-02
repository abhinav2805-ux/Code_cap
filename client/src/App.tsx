import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import FindTeamMates from './components/FindTeamMates';
import About from './About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path ="/buildteam" element={<FindTeamMates/>}></Route>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;