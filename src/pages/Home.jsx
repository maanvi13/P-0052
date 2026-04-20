import Navbar from '../components/Navbar';
import SectionCard from '../components/SectionCard';
import { Link } from 'react-router-dom';
import { Camera, Edit3, Briefcase, Video, UserCircle, Megaphone, Shield, Users } from 'lucide-react';
import './Home.css';

export default function Home() {
  const sections = [
    {
      title: 'Creators Portal',
      description: 'Book studio time, access AI writing tools, and manage your monetization.',
      icon: Camera,
      linkTo: '/creators',
      gradient: 'gradient-creator'
    },
    {
      title: 'Editors Hub',
      description: 'High-performance editing bays, asset management, and collaboration queues.',
      icon: Edit3,
      linkTo: '/editors',
      gradient: 'gradient-editor'
    },
    {
      title: 'Brand Collaborators',
      description: 'Discover talent, pitch campaigns, and monitor your ROI directly.',
      icon: Briefcase,
      linkTo: '/brands',
      gradient: 'gradient-brand'
    },
    {
      title: 'Cinematographers',
      description: 'Manage equipment, multi-camera setups, and coordinate studio technicals.',
      icon: Video,
      linkTo: '/cinematographers',
      gradient: 'gradient-cinema'
    }
  ];

  const dashboards = [
    {
      title: 'Creator Side',
      description: 'Signup → Plan → Book Studio → Create → Edit → Brand Deals → Earn',
      icon: UserCircle,
      linkTo: '/dashboard/creator',
      color: '#a855f7',
      grad: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      steps: 7,
    },
    {
      title: 'Brand Side',
      description: 'Signup → Campaign → Find Creators → Collaborate → Pay',
      icon: Megaphone,
      linkTo: '/dashboard/brand',
      color: '#06b6d4',
      grad: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      steps: 5,
    },
    {
      title: 'Admin Side',
      description: 'Manage Users → Bookings → Campaigns → Monitor Payments',
      icon: Shield,
      linkTo: '/dashboard/admin',
      color: '#f59e0b',
      grad: 'linear-gradient(135deg, #f59e0b, #d97706)',
      steps: 4,
    },
    {
      title: 'Staff Side',
      description: 'Schedule → Prep Studio → Assist Creator → Complete → Editing',
      icon: Users,
      linkTo: '/dashboard/staff',
      color: '#10b981',
      grad: 'linear-gradient(135deg, #10b981, #059669)',
      steps: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container section-padding home-main">
        <header className="hero-section animate-fade-in">
          <div className="badge glass-panel">India's Premier Digital Hub</div>
          <h1 className="hero-title">
            Where Passion<br />
            Becomes <span className="text-gradient-accent">Legacy.</span>
          </h1>
          <p className="hero-subtitle">
            Creators Café is a subscription-based studio and talent agency. 
            Others provide space. We provide opportunity.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Choose Your Plan</button>
            <button className="btn-outline">Take a Studio Tour</button>
          </div>
        </header>

        <section className="portals-section">
          <div className="portals-header animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2>Choose Your Portal</h2>
            <p>Access specialized tools tailored for your role in the ecosystem.</p>
          </div>
          
          <div className="portals-grid">
            {sections.map((section, index) => (
              <div key={index} style={{ animationDelay: `${0.3 + index * 0.1}s` }} className="animate-fade-in">
                <SectionCard {...section} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Role Dashboards Section ── */}
        <section className="portals-section">
          <div className="portals-header animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2>Role Dashboards</h2>
            <p>Step-by-step workflow dashboards built for every stakeholder.</p>
          </div>

          <div className="portals-grid">
            {dashboards.map((d, i) => {
              const Icon = d.icon;
              return (
                <Link to={d.linkTo} key={i} style={{ textDecoration: 'none' }}>
                  <div
                    className="glass-panel animate-fade-in"
                    style={{
                      padding: 28,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                      cursor: 'pointer',
                      animationDelay: `${0.2 + i * 0.1}s`,
                      transition: 'all 0.35s ease',
                    }}
                  >
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: d.grad,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 6px 20px ${d.color}44`,
                    }}>
                      <Icon size={24} color="#fff" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>{d.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>{d.description}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: d.color, letterSpacing: '0.05em' }}>
                        {d.steps} STEPS
                      </span>
                      <span style={{ fontSize: '0.8rem', color: d.color, fontWeight: 600 }}>Open Dashboard →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
