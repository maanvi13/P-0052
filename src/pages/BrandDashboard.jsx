import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  UserPlus, Megaphone, Users, Handshake, CreditCard,
  ArrowRight, BarChart2, Eye, Target, TrendingUp, Bell
} from 'lucide-react';
import './Dashboard.css';

const STEPS = [
  {
    num: 1, title: 'Sign Up & Brand Profile',
    desc: 'Create your brand account, add GST details, and upload your brand kit (logo, colours, tone).',
    icon: UserPlus, status: 'done',
    tip: 'Verified brand badges increase creator acceptance rates by 3x.',
  },
  {
    num: 2, title: 'Create Campaign',
    desc: 'Define your objective, target demographics, content format, and campaign budget end-to-end.',
    icon: Megaphone, status: 'done',
    tip: 'Short-form video campaigns see 65% higher ROI on this platform.',
  },
  {
    num: 3, title: 'Discover Creators',
    desc: 'Browse verified creator profiles filtered by niche, audience size, engagement, and location.',
    icon: Users, status: 'active',
    tip: 'Use AI matching to surface the top 10 creators aligned with your brand persona.',
  },
  {
    num: 4, title: 'Collaborate',
    desc: 'Send proposals, negotiate terms, approve briefs, and review deliverables within the platform.',
    icon: Handshake, status: 'pending',
    tip: 'All contracts are stored on-platform and legally binding with e-signature.',
  },
  {
    num: 5, title: 'Pay & Report',
    desc: 'Release milestone payments, auto-generate GST invoices, and export full campaign reports.',
    icon: CreditCard, status: 'pending',
    tip: 'Escrow-based payments protect both parties. Funds release only on approval.',
  },
];

const STATS = [
  { value: '4', label: 'Active campaigns' },
  { value: '23', label: 'Creators engaged' },
  { value: '₹3.2L', label: 'Total spend' },
  { value: '4.8x', label: 'Avg. ROI' },
];

const METRICS = [
  { label: 'Audience Reach', pct: 78 },
  { label: 'Engagement Rate', pct: 64 },
  { label: 'Conversion Rate', pct: 42 },
  { label: 'Brand Recall', pct: 88 },
];

const ACTIONS = [
  { icon: Megaphone, title: 'Launch New Campaign', desc: 'Set up a new brand campaign with brief builder and budget planner.', cta: 'Create Campaign' },
  { icon: Users, title: 'Browse Talent Pool', desc: 'Filter 500+ verified creators by niche, location and audience.', cta: 'Find Creators' },
  { icon: BarChart2, title: 'Live Analytics', desc: 'Real-time tracking of impressions, clicks, and conversions.', cta: 'View Reports' },
  { icon: Target, title: 'AI Creator Match', desc: 'Let AI shortlist creators that perfectly fit your campaign brief.', cta: 'Run Match' },
];

const ACTIVITY = [
  { text: <><strong>Riya Sharma</strong> accepted your collaboration proposal</>, time: '5 min ago' },
  { text: <>Campaign <strong>"Monsoon Refresh"</strong> content submitted for approval</>, time: '1 hr ago' },
  { text: <><strong>2 new creators</strong> matched your FitLife campaign brief</>, time: '3 hrs ago' },
  { text: <>Invoice <strong>#INV-2024-089</strong> auto-generated for ₹45,000</>, time: 'Yesterday' },
];

export default function BrandDashboard() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <>
      <Navbar />
      <main className="dash-page role-brand container">
        {/* ── Hero ── */}
        <header className="dash-hero animate-fade-in">
          <div className="dash-role-badge">
            <span className="badge-dot" />
            Brand Side
          </div>
          <h1>Power Your<br /><span className="role-accent">Campaign Pipeline</span></h1>
          <p>From campaign creation to creator collaboration and automated payout — manage every stage in one dashboard.</p>
          <div className="dash-hero-actions">
            <button className="btn-role"><Megaphone size={16} /> Create Campaign</button>
            <button className="btn-outline">Browse Creators</button>
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
          {/* Workflow */}
          <div>
            <div className="section-label">
              <h2>Campaign Workflow</h2>
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
                              💡 {step.tip}
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
            {/* Quick Actions */}
            <div className="section-label">
              <h2>Quick Actions</h2>
              <div className="label-line" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
              {ACTIONS.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div className="action-card" key={i}>
                    <div className="action-card-inner">
                      <div className="action-icon"><Icon size={20} /></div>
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                      <div className="card-cta">{a.cta} <ArrowRight size={14} /></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Campaign Performance */}
            <div className="section-label">
              <h2>Campaign Health</h2>
              <div className="label-line" />
            </div>
            <div className="glass-panel" style={{ padding: '24px 28px', marginBottom: 32 }}>
              {METRICS.map((m, i) => (
                <div className="progress-row" key={i}>
                  <span className="progress-label">{m.label}</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${m.pct}%` }} />
                  </div>
                  <span className="progress-pct">{m.pct}%</span>
                </div>
              ))}
            </div>

            {/* Activity Feed */}
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
