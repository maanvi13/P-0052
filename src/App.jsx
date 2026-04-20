import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatorsPortal from './pages/CreatorsPortal';
import EditorsPortal from './pages/EditorsPortal';
import BrandsPortal from './pages/BrandsPortal';
import CinematographersPortal from './pages/CinematographersPortal';
import CreatorDashboard from './pages/CreatorDashboard';
import BrandDashboard from './pages/BrandDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<CreatorsPortal />} />
        <Route path="/editors" element={<EditorsPortal />} />
        <Route path="/brands" element={<BrandsPortal />} />
        <Route path="/cinematographers" element={<CinematographersPortal />} />
        {/* Role Dashboards */}
        <Route path="/dashboard/creator" element={<CreatorDashboard />} />
        <Route path="/dashboard/brand" element={<BrandDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
