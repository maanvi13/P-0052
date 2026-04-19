import Navbar from '../components/Navbar';
import { Video, Settings2, Box, Users } from 'lucide-react';
import './CreatorsPortal.css';

export default function CinematographersPortal() {
  return (
    <>
      <Navbar />
      <main className="container section-padding portal-main">
        <header className="portal-header animate-fade-in">
          <div className="icon-container gradient-cinema" style={{ margin: '0 auto 24px' }}>
            <Video size={32} color="white" />
          </div>
          <h1>Cinematographers</h1>
          <p>The technical backbone. Manage cinematic logistics and multi-cam sets.</p>
        </header>

        <section className="portal-dashboard">
          <div className="dashboard-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel dashboard-card">
              <Settings2 className="dash-icon" />
              <h3>Studio Riggings</h3>
              <p>Manage green screen setups, DMX lighting grids, and soundproofing specs.</p>
              <button className="btn-primary" style={{ marginTop: 'auto' }}>Manage Studios</button>
            </div>

            <div className="glass-panel dashboard-card">
              <Box className="dash-icon" />
              <h3>Equipment Inventory</h3>
              <p>Track, request, and log high-end gear out to booked creators.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>View Inventory</button>
            </div>

            <div className="glass-panel dashboard-card">
              <Users className="dash-icon" />
              <h3>Session Support</h3>
              <p>Join scheduled calendar blocks to assist creators on the professional stage.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>Daily Schedule</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
