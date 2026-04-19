import Navbar from '../components/Navbar';
import { Edit3, HardDrive, List, CheckCircle } from 'lucide-react';
import './CreatorsPortal.css';

export default function EditorsPortal() {
  return (
    <>
      <Navbar />
      <main className="container section-padding portal-main">
        <header className="portal-header animate-fade-in">
          <div className="icon-container gradient-editor" style={{ margin: '0 auto 24px' }}>
            <Edit3 size={32} color="white" />
          </div>
          <h1>Editors Hub</h1>
          <p>Access high-performance bays, manage collaborative queues, and deliver legacy content.</p>
        </header>

        <section className="portal-dashboard">
          <div className="dashboard-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel dashboard-card">
              <List className="dash-icon" />
              <h3>Editing Request Queue</h3>
              <p>Review and accept incoming tickets from creators awaiting your magic.</p>
              <button className="btn-primary" style={{ marginTop: 'auto' }}>View Queue</button>
            </div>

            <div className="glass-panel dashboard-card">
              <HardDrive className="dash-icon" />
              <h3>Asset Management</h3>
              <p>Securely download raw footage and upload finalized exports.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>Access Drive</button>
            </div>

            <div className="glass-panel dashboard-card">
              <CheckCircle className="dash-icon" />
              <h3>Review Deliverables</h3>
              <p>Manage feedback loops and revision cycles for optimum creative precision.</p>
              <button className="btn-outline" style={{ marginTop: 'auto' }}>Manage Revisions</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
