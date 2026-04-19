import { Link } from 'react-router-dom';
import { Camera, Edit3, Briefcase, Video } from 'lucide-react';
import './Navbar.css'; // Let's use simple CSS modules or a separate CSS file for Navbar if needed, or inline.

export default function Navbar() {
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
        </div>
        <div className="auth-buttons">
          <button className="btn-outline">Log in</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
