import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Cv from './pages/cv/'
import Project from './pages/project/'
import Error from '@components/error'

import './sass/app.scss'

import Navbar from '@layouts/navbar';
import Footer from '@layouts/footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cv" element={<Cv />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;