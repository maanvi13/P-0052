import Navbar from '../components/Navbar';
import { Camera, Calendar, PlaySquare, TrendingUp, Cpu } from 'lucide-react';
import './CreatorsPortal.css'; // Let's use inline styles or simple css for now, or unified css

export default function CreatorsPortal() {
  return (
    <>
      <Navbar />
      <main className="container section-padding portal-main">
        <header className="portal-header animate-fade-in">
          <div className="icon-container gradient-creator" style={{ margin: '0 auto 24px' }}>
            <Camera size={32} color="white" />
          </div>
          <h1>Creators Portal</h1>
          <p>Book your stage, access AI assistance, and grow your digital legacy natively.</p>
        </header>

        <section className="portal-dashboard">
          <div className="dashboard-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel dashboard-card">
              <Calendar className="dash-icon" />
              <h3>Studio Booking</h3>
              <p>Reserve multi-camera sets or soundproof podcast rooms instantly.</p>
              <button className="btn-primary" style={{ marginTop: 'auto' }}>View Availability</button>
            </div>

            <div className="glass-panel dashboard-card">
              <Cpu className="dash-icon" />
              <h3>AI Assistant</h3>
              <p>Generate precise scripts, captions, and hashtag strategies.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>Launch AI</button>
            </div>

            <div className="glass-panel dashboard-card">
              <PlaySquare className="dash-icon" />
              <h3>Content Management</h3>
              <p>Upload raw footage and submit tickets to the specialized editing bay.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>Upload Media</button>
            </div>

            <div className="glass-panel dashboard-card">
              <TrendingUp className="dash-icon" />
              <h3>Monetization & Growth</h3>
              <p>Review sponsored brand deal proposals and your audience insights.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>View Analytics</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
