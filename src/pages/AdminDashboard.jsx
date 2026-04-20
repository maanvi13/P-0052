import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Users, Calendar, Megaphone, DollarSign, ArrowRight,
  Shield, AlertTriangle, CheckCircle, XCircle,
  BarChart2, TrendingUp, Settings, Bell
} from 'lucide-react';
import './Dashboard.css';

const PANELS = [
  {
    id: 'users', title: 'Manage Users',
    icon: Users, status: 'active',
    desc: 'Onboard, verify, suspend, and manage all creator, brand, and staff accounts.',
    tip: 'Pending KYC verification: 14 users. Review flagged accounts before 72 hrs.',
    stats: [
      { label: 'Total Users', val: '1,284' },
      { label: 'New Today', val: '+23' },
      { label: 'Pending KYC', val: '14' },
      { label: 'Suspended', val: '3' },
    ]
  },
  {
    id: 'bookings', title: 'Manage Bookings',
    icon: Calendar, status: 'active',
    desc: 'View, approve, reschedule, or cancel studio booking requests across all studio rooms.',
    tip: '3 conflicting bookings detected in Studio A for next Saturday.',
    stats: [
      { label: 'Today\'s Sessions', val: '18' },
      { label: 'This Week', val: '94' },
      { label: 'Conflicts', val: '3' },
      { label: 'Cancellations', val: '7' },
    ]
  },
  {
    id: 'campaigns', title: 'Manage Campaigns',
    icon: Megaphone, status: 'alert',
    desc: 'Oversee brand-creator campaigns — approve briefs, mediate disputes, and monitor compliance.',
    tip: 'Campaign "FreshWave Summer" flagged for compliance review.',
    stats: [
      { label: 'Active Campaigns', val: '47' },
      { label: 'Awaiting Approval', val: '9' },
      { label: 'Disputes Open', val: '2' },
      { label: 'Completed', val: '312' },
    ]
  },
  {
    id: 'payments', title: 'Monitor Payments',
    icon: DollarSign, status: 'active',
    desc: 'Track all platform transactions, escrow balances, creator payouts, and revenue share.',
    tip: '2 failed payout attempts. Manual review needed for ₹68,000 in held funds.',
    stats: [
      { label: 'Total Revenue', val: '₹18.4L' },
      { label: 'Escrowed', val: '₹3.2L' },
      { label: 'Failed Payouts', val: '2' },
      { label: 'This Month', val: '₹2.1L' },
    ]
  },
];

const ACTIONS = [
  { icon: Shield, title: 'KYC Approvals', desc: 'Review 14 pending identity verification documents.', cta: 'Review Now' },
  { icon: AlertTriangle, title: 'Compliance Flags', desc: 'Investigate 3 reported content or contract violations.', cta: 'Investigate' },
  { icon: BarChart2, title: 'Platform Analytics', desc: 'Revenue trends, user growth, and booking heatmaps.', cta: 'Open Reports' },
  { icon: Settings, title: 'System Settings', desc: 'Manage roles, permissions, pricing tiers, and integrations.', cta: 'Configure' },
];

const REVENUE = [
  { label: 'Platform Fees', pct: 72 },
  { label: 'Studio Bookings', pct: 85 },
  { label: 'Brand Commissions', pct: 58 },
  { label: 'Add-on Services', pct: 40 },
];

const ALERTS = [
  { icon: AlertTriangle, color: '#f59e0b', text: <><strong>3 booking conflicts</strong> detected in Studio A — Sat, 26 Apr</> , time: 'Now' },
  { icon: XCircle, color: '#ef4444', text: <><strong>2 payout failures</strong> — ₹68,000 in held escrow funds</>, time: '30 min ago' },
  { icon: CheckCircle, color: '#10b981', text: <>Brand <strong>"FitLife"</strong> campaign approved and live</>, time: '2 hrs ago' },
  { icon: Bell, color: '#06b6d4', text: <><strong>14 KYC submissions</strong> awaiting admin review</>, time: '4 hrs ago' },
];

export default function AdminDashboard() {
  const [activePanel, setActivePanel] = useState('users');
  const active = PANELS.find(p => p.id === activePanel);

  return (
    <>
      <Navbar />
      <main className="dash-page role-admin container">
        {/* ── Hero ── */}
        <header className="dash-hero animate-fade-in">
          <div className="dash-role-badge">
            <span className="badge-dot" />
            Admin Control Centre
          </div>
          <h1>Platform<br /><span className="role-accent">Command & Control</span></h1>
          <p>Unified oversight of users, studio bookings, brand campaigns, and financial flows.</p>
          <div className="dash-hero-actions">
            <button className="btn-role"><Shield size={16} /> Review KYC</button>
            <button className="btn-outline">Export Reports</button>
          </div>
        </header>

        {/* ── Panel Selector Tabs ── */}
        <div className="dash-stats animate-fade-in" style={{ animationDelay: '0.1s', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {PANELS.map(p => {
            const Icon = p.icon;
            const isSelected = activePanel === p.id;
            return (
              <div
                key={p.id}
                className="stat-card"
                onClick={() => setActivePanel(p.id)}
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--role-color)' : undefined,
                  boxShadow: isSelected ? '0 4px 20px var(--role-glow)' : undefined,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Icon size={18} style={{ color: 'var(--role-color)' }} />
                  {p.status === 'alert' && (
                    <span style={{ fontSize: '0.68rem', background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: 999, padding: '2px 8px', fontWeight: 700 }}>ALERT</span>
                  )}
                </div>
                <div className="stat-value" style={{ fontSize: '1.4rem' }}>{p.title}</div>
              </div>
            );
          })}
        </div>

        {/* ── Active Panel Detail ── */}
        {active && (
          <div className="glass-panel animate-fade-in" style={{ padding: 36, marginBottom: 48, position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 28 }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: 8 }}>{active.title}</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 500 }}>{active.desc}</p>
                <div style={{ marginTop: 12, fontSize: '0.82rem', color: 'var(--role-color)', display: 'flex', gap: 6, alignItems: 'center' }}>
                  ⚡ {active.tip}
                </div>
              </div>
              <button className="btn-role"><ArrowRight size={16} /> Open Full Panel</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
              {active.stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '20px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid var(--glass-border)' }}>
                  <div className="stat-value" style={{ fontSize: '1.7rem' }}>{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="dash-two-col">
          {/* Left: Quick Actions */}
          <div>
            <div className="section-label">
              <h2>Admin Actions</h2>
              <div className="label-line" />
            </div>
            <div className="action-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
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
          </div>

          {/* Right: Revenue + Alerts */}
          <div>
            <div className="section-label">
              <h2>Revenue Breakdown</h2>
              <div className="label-line" />
            </div>
            <div className="glass-panel" style={{ padding: '24px 28px', marginBottom: 32 }}>
              {REVENUE.map((r, i) => (
                <div className="progress-row" key={i}>
                  <span className="progress-label">{r.label}</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="progress-pct">{r.pct}%</span>
                </div>
              ))}
            </div>

            <div className="section-label">
              <h2>System Alerts</h2>
              <div className="label-line" />
            </div>
            <div className="activity-feed">
              {ALERTS.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div className="activity-item" key={i}>
                    <Icon size={16} style={{ color: a.color, flexShrink: 0 }} />
                    <div className="activity-text">{a.text}</div>
                    <div className="activity-time">{a.time}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
