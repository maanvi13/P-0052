import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Edit3, Briefcase, Video, LayoutDashboard, ChevronDown, UserCircle, Megaphone, Shield, Users } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [dashOpen, setDashOpen] = useState(false);

  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <Link to="/" className="brand">
          <span className="text-gradient">Creators</span>
          <span className="text-gradient-accent">Café</span>
        </Link>
        <div className="nav-links">
          <Link to="/creators" className="nav-item">
            <Camera className="icon" size={18} />
            Creators
          </Link>
          <Link to="/editors" className="nav-item">
            <Edit3 className="icon" size={18} />
            Editors
          </Link>
          <Link to="/brands" className="nav-item">
            <Briefcase className="icon" size={18} />
            Brands
          </Link>
          <Link to="/cinematographers" className="nav-item">
            <Video className="icon" size={18} />
            Cinematographers
          </Link>
          {/* Dashboards dropdown */}
          <div
            className="nav-item nav-dropdown"
            onMouseEnter={() => setDashOpen(true)}
            onMouseLeave={() => setDashOpen(false)}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <LayoutDashboard className="icon" size={18} />
            Dashboards
            <ChevronDown size={14} style={{ marginLeft: 4, opacity: 0.6, transition: 'transform 0.2s', transform: dashOpen ? 'rotate(180deg)' : 'none' }} />
            {dashOpen && (
              <div className="dropdown-menu glass-panel">
                <Link to="/dashboard/creator" className="dropdown-item" onClick={() => setDashOpen(false)}>
                  <UserCircle size={15} style={{ color: '#a855f7' }} /> Creator Side
                </Link>
                <Link to="/dashboard/brand" className="dropdown-item" onClick={() => setDashOpen(false)}>
                  <Megaphone size={15} style={{ color: '#06b6d4' }} /> Brand Side
                </Link>
                <Link to="/dashboard/admin" className="dropdown-item" onClick={() => setDashOpen(false)}>
                  <Shield size={15} style={{ color: '#f59e0b' }} /> Admin Side
                </Link>
                <Link to="/dashboard/staff" className="dropdown-item" onClick={() => setDashOpen(false)}>
                  <Users size={15} style={{ color: '#10b981' }} /> Staff Side
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="auth-buttons">
          <button className="btn-outline">Log in</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
