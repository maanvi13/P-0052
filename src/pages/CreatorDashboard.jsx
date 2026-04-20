import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  UserPlus, CreditCard, Calendar, Film, Scissors,
  Handshake, DollarSign, ArrowRight, TrendingUp,
  Play, Upload, Star, Bell
} from 'lucide-react';
import './Dashboard.css';

const STEPS = [
  {
    num: 1, title: 'Sign Up & Verify',
    desc: 'Create your creator profile, verify your identity, and set up your digital portfolio.',
    icon: UserPlus, status: 'done',
    tip: 'Complete your bio and social links to unlock brand visibility.',
  },
  {
    num: 2, title: 'Choose Your Plan',
    desc: 'Pick from Starter, Pro, or Studio Elite. Unlock dedicated slots, editing hours, and AI tools.',
    icon: CreditCard, status: 'done',
    tip: 'Studio Elite gives you priority bookings and a personal production assistant.',
  },
  {
    num: 3, title: 'Book Your Studio',
    desc: 'Reserve a multi-camera set, podcast room, or green-screen bay — as little as 1-hour slots.',
    icon: Calendar, status: 'active',
    tip: 'Book 48 hrs in advance for best availability. Cancel up to 4 hrs before freely.',
  },
  {
    num: 4, title: 'Create Your Content',
    desc: 'Hit the studio. Our team preps your setup. Use AI script tools on the Creator Tablet.',
    icon: Film, status: 'pending',
    tip: 'Use the teleprompt mode on your Creator Tablet for flawless delivery.',
  },
  {
    num: 5, title: 'Edit & Publish',
    desc: 'Submit footage to the editing bay or use the in-platform editor. Schedule social posts directly.',
    icon: Scissors, status: 'pending',
    tip: 'Pro editors turn around content in 24 hrs with your style preset locked in.',
  },
  {
    num: 6, title: 'Secure Brand Deals',
    desc: 'Brands discover you on our marketplace. Accept proposals, negotiate, and collaborate seamlessly.',
    icon: Handshake, status: 'pending',
    tip: 'Maintain 70%+ engagement rate to get featured in the Brand Discovery feed.',
  },
  {
    num: 7, title: 'Earn Money',
    desc: 'Receive payments via UPI, bank transfer, or wallet. Track earnings and tax docs in one place.',
    icon: DollarSign, status: 'pending',
    tip: 'Payouts every Friday. Minimum threshold ₹500. Tax TDS auto-calculated.',
  },
];

const STATS = [
  { value: '12', label: 'Sessions booked' },
  { value: '₹48K', label: 'Total earned' },
  { value: '3', label: 'Active deals' },
  { value: '89K', label: 'Total reach' },
];

const ACTIONS = [
  { icon: Calendar, title: 'Book a Studio Slot', desc: 'Check live availability and lock your next session instantly.', cta: 'View Calendar' },
  { icon: Play, title: 'Launch AI Script Tool', desc: 'Generate captions, scripts, and hashtag strategies in seconds.', cta: 'Open AI' },
  { icon: Upload, title: 'Submit Footage', desc: 'Upload your raw clips and raise an editing request to the bay.', cta: 'Upload Now' },
  { icon: TrendingUp, title: 'Growth Dashboard', desc: 'Track follower trends, engagement, and revenue projections.', cta: 'View Analytics' },
];

const ACTIVITY = [
  { text: <><strong>Studio booking confirmed</strong> — Podcast Room B, Tomorrow 11 AM</>, time: '2 min ago' },
  { text: <><strong>Levi Foods</strong> sent you a brand deal proposal (₹25,000)</>, time: '45 min ago' },
  { text: <>Your reel <strong>"Morning Routine"</strong> is ready for review</>, time: '3 hrs ago' },
  { text: <><strong>₹12,000</strong> credited to your wallet from FitGear campaign</>, time: 'Yesterday' },
];

export default function CreatorDashboard() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <>
      <Navbar />
      <main className="dash-page role-creator container">
        {/* ── Hero ── */}
        <header className="dash-hero animate-fade-in">
          <div className="dash-role-badge">
            <span className="badge-dot" />
            Creator Side
          </div>
          <h1>Your Creative<br /><span className="role-accent">Journey Starts Here</span></h1>
          <p>Follow your personalised 7-step roadmap from first sign-up to brand deals and passive earnings.</p>
          <div className="dash-hero-actions">
            <button className="btn-role"><Calendar size={16} /> Book Studio Now</button>
            <button className="btn-outline">View Earnings</button>
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

        {/* ── Two-column: Workflow + Quick Actions ── */}
        <div className="dash-two-col">
          {/* Workflow */}
          <div>
            <div className="section-label">
              <h2>Your Workflow</h2>
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
                              <Star size={12} /> {step.tip}
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
                  <div className="action-card" key={i} style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
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
