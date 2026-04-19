import Navbar from '../components/Navbar';
import { Briefcase, Users, FileText, PieChart } from 'lucide-react';
import './CreatorsPortal.css'; // Reusing unified dashboard css

export default function BrandsPortal() {
  return (
    <>
      <Navbar />
      <main className="container section-padding portal-main">
        <header className="portal-header animate-fade-in">
          <div className="icon-container gradient-brand" style={{ margin: '0 auto 24px' }}>
            <Briefcase size={32} color="white" />
          </div>
          <h1>Brand Collaborators</h1>
          <p>The commercial bridge. Connect directly with top-tier verified talent.</p>
        </header>

        <section className="portal-dashboard">
          <div className="dashboard-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel dashboard-card">
              <FileText className="dash-icon" />
              <h3>Create Campaign</h3>
              <p>Pitch your strategy, set budgets, and outline target demographics.</p>
              <button className="btn-primary" style={{ marginTop: 'auto' }}>New Campaign</button>
            </div>

            <div className="glass-panel dashboard-card">
              <Users className="dash-icon" />
              <h3>Talent Discovery</h3>
              <p>Match with our curated roster of subscribed digital storytellers.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>Explore Talent</button>
            </div>

            <div className="glass-panel dashboard-card">
              <PieChart className="dash-icon" />
              <h3>Campaign Analytics</h3>
              <p>Track live ROI, reach, and engagement metrics via our unified dashboard.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>View Reports</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
