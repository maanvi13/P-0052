import Navbar from '../components/Navbar';
import SectionCard from '../components/SectionCard';
import { Camera, Edit3, Briefcase, Video } from 'lucide-react';
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
      </main>
    </>
  );
}
