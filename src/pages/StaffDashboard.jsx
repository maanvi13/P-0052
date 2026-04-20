import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  ClipboardList, Cpu, UserCheck, CheckSquare, Scissors,
  ArrowRight, Clock, AlertCircle, CheckCircle, Wrench, Camera
} from 'lucide-react';
import './Dashboard.css';

const STEPS = [
  {
    num: 1, title: 'Check Your Schedule',
    desc: 'Log in to view your shift, assigned studio rooms, and creator session details for the day.',
    icon: ClipboardList, status: 'done',
    tip: 'You have 3 sessions today: 10 AM, 2 PM, and 5 PM in Rooms A, B, and Podcast.',
  },
  {
    num: 2, title: 'Prepare the Studio',
    desc: 'Set up lighting, camera rigs, audio gear, and load the creator\'s saved style presets.',
    icon: Wrench, status: 'done',
    tip: 'Room A preset "Riya_Vlog_V3" is loaded. Check backdrop and key light temp.',
  },
  {
    num: 3, title: 'Assist the Creator',
    desc: 'Welcome the creator, run tech checks, manage teleprompter, and assist on set throughout session.',
    icon: UserCheck, status: 'active',
    tip: 'Creator Arjun Singh (10 AM) prefers natural lighting and no fill light. Check notes.',
  },
  {
    num: 4, title: 'Complete the Session',
    desc: 'Mark session complete, export raw footage to the editing bay queue, and log any equipment issues.',
    icon: CheckSquare, status: 'pending',
    tip: 'Always export in ProRes 422 for editing bay. Label folders as YYYY-MM-DD_CreatorName.',
  },
  {
    num: 5, title: 'Handle Editing Tasks',
    desc: 'If assigned editing support: apply creator style presets, colour grade, and submit for creator review.',
    icon: Scissors, status: 'pending',
    tip: 'Editing SLA is 24 hours from session end. Rush flag adds ₹500 to creator bill.',
  },
];

const STATS = [
  { value: '3', label: 'Sessions today' },
  { value: '18', label: 'Sessions this week' },
  { value: '96%', label: 'Satisfaction score' },
  { value: '2', label: 'Equipment issues' },
];

const SCHEDULE = [
  { time: '10:00 AM', room: 'Studio A', creator: 'Arjun Singh', type: 'YouTube Vlog', status: 'active' },
  { time: '2:00 PM',  room: 'Podcast Room', creator: 'Priya Mehra', type: 'Podcast Recording', status: 'pending' },
  { time: '5:00 PM',  room: 'Studio B', creator: 'Dev Khatri', type: 'Reel Shoot', status: 'pending' },
];

const EQUIPMENT = [
  { label: 'Sony FX3 — Room A', status: 'ok' },
  { label: 'Zoom H6 — Podcast', status: 'ok' },
  { label: 'Rode NT1 — Room B', status: 'issue' },
  { label: 'Aputure 600D — Room A', status: 'ok' },
  { label: '75" Teleprompter', status: 'issue' },
];

const ACTIVITY = [
  { text: <><strong>Room A preset loaded</strong> — "Arjun_Travel_Bright" applied successfully</>, time: '8 min ago' },
  { text: <><strong>Equipment alert:</strong> Rode NT1 mic shows interference on channel 2</>, time: '22 min ago' },
  { text: <>Session <strong>Priya Mehra Podcast</strong> files exported to editing queue</>, time: 'Yesterday' },
  { text: <><strong>Positive review</strong> from Riya Sharma — "Staff was very professional"</>, time: 'Yesterday' },
];

export default function StaffDashboard() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <>
      <Navbar />
      <main className="dash-page role-staff container">
        {/* ── Hero ── */}
        <header className="dash-hero animate-fade-in">
          <div className="dash-role-badge">
            <span className="badge-dot" />
            Staff Operations
          </div>
          <h1>Today's Studio<br /><span className="role-accent">Operations Hub</span></h1>
          <p>Your end-to-end shift companion — from studio preparation to session wrap-up and post-production handoff.</p>
          <div className="dash-hero-actions">
            <button className="btn-role"><ClipboardList size={16} /> View My Schedule</button>
            <button className="btn-outline">Report Issue</button>
          </div>
        </header>

        {/* ── Stats ── */}
        <div className="dash-stats animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {STATS.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="dash-two-col">
          {/* Workflow Steps */}
          <div>
            <div className="section-label">
              <h2>Session Workflow</h2>
              <div className="label-line" />
            </div>
            <div className="workflow-flow">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeStep === step.num;
                const isDone = step.status === 'done';
                return (
                  <div
                    key={step.num}
                    className={`step-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`}
                    style={{ animationDelay: `${0.2 + i * 0.07}s` }}
                    onClick={() => setActiveStep(step.num)}
                  >
                    <div className="step-num">{isDone ? '✓' : step.num}</div>
                    <div className="step-body">
                      <div className="step-body-inner">
                        <div className="step-info">
                          <div className="step-title">{step.title}</div>
                          <div className="step-desc">{step.desc}</div>
                          {isActive && (
                            <div style={{ marginTop: 10, fontSize: '0.8rem', color: 'var(--role-color)', display: 'flex', gap: 6, alignItems: 'center' }}>
                              📋 {step.tip}
                            </div>
                          )}
                        </div>
                        <div className="step-icon-wrap"><Icon size={18} /></div>
                        <span className={`step-status-tag ${step.status}`}>
                          {step.status === 'done' ? 'Done' : step.status === 'active' ? 'Active' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Today's Sessions */}
            <div className="section-label">
              <h2>Today's Sessions</h2>
              <div className="label-line" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {SCHEDULE.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: 16,
                    alignItems: 'center',
                    padding: '18px 22px',
                    borderRadius: 14,
                    background: 'var(--glass-bg)',
                    border: `1px solid ${s.status === 'active' ? 'var(--role-color)' : 'var(--glass-border)'}`,
                    backdropFilter: 'var(--glass-blur)',
                    boxShadow: s.status === 'active' ? '0 4px 20px var(--role-glow)' : undefined,
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{s.time}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--role-color)', fontWeight: 700 }}>{s.room}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{s.creator}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.type}</div>
                  </div>
                  <span className={`step-status-tag ${s.status}`}>
                    {s.status === 'active' ? 'Live' : 'Upcoming'}
                  </span>
                </div>
              ))}
            </div>

            {/* Equipment Status */}
            <div className="section-label">
              <h2>Equipment Status</h2>
              <div className="label-line" />
            </div>
            <div className="glass-panel" style={{ padding: '20px 24px', marginBottom: 32 }}>
              {EQUIPMENT.map((e, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < EQUIPMENT.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                  {e.status === 'ok' ? <CheckCircle size={16} color="#10b981" /> : <AlertCircle size={16} color="#ef4444" />}
                  <span style={{ flex: 1, fontSize: '0.87rem', color: 'var(--text-secondary)' }}>{e.label}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: e.status === 'ok' ? '#10b981' : '#ef4444' }}>
                    {e.status === 'ok' ? 'OK' : 'ISSUE'}
                  </span>
                </div>
              ))}
            </div>

            {/* Activity */}
            <div className="section-label">
              <h2>Recent Activity</h2>
              <div className="label-line" />
            </div>
            <div className="activity-feed">
              {ACTIVITY.map((a, i) => (
                <div className="activity-item" key={i}>
                  <div className="activity-dot" />
                  <div className="activity-text">{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
