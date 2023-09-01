import './sass/app.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Cv from './pages/cv/'
import Error from '@components/error'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
  }

export default App;