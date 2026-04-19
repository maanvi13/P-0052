import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatorsPortal from './pages/CreatorsPortal';
import EditorsPortal from './pages/EditorsPortal';
import BrandsPortal from './pages/BrandsPortal';
import CinematographersPortal from './pages/CinematographersPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<CreatorsPortal />} />
        <Route path="/editors" element={<EditorsPortal />} />
        <Route path="/brands" element={<BrandsPortal />} />
        <Route path="/cinematographers" element={<CinematographersPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
