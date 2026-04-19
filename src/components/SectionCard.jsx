import { Link } from 'react-router-dom';
import './SectionCard.css';

export default function SectionCard({ title, description, icon: Icon, linkTo, gradient }) {
  return (
    <Link to={linkTo} className="section-card glass-panel animate-fade-in">
      <div className={`icon-container ${gradient}`}>
        <Icon size={32} color="white" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <span>Explore Portal</span>
        <span className="arrow">→</span>
      </div>
    </Link>
  );
}
