import React from 'react'
import './Navigation.scss'

interface NavigationProps {
  activeTab?: 'hebergements' | 'activites' | null
  onTabChange?: (tab: 'hebergements' | 'activites') => void
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeTab = null, 
  onTabChange,
  className = '' 
}) => {
  const handleTabClick = (tab: 'hebergements' | 'activites') => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <nav className={`navigation ${className}`}>
      {/* Container pour les boutons */}
      <div className="navigation__buttons">
        {/* Bouton Hébergements */}
        <button
          onClick={() => handleTabClick('hebergements')}
          className={`nav-button ${activeTab === 'hebergements' ? 'active' : ''}`}
        >
          Hébergements
          <div className={`nav-indicator ${activeTab === 'hebergements' ? 'active' : ''}`} />
        </button>

        {/* Bouton Activités */}
        <button
          onClick={() => handleTabClick('activites')}
          className={`nav-button ${activeTab === 'activites' ? 'active' : ''}`}
        >
          Activités
          <div className={`nav-indicator ${activeTab === 'activites' ? 'active' : ''}`} />
        </button>
      </div>

      {/* Container pour les barres (mobile uniquement) */}
      <div className="navigation__bars">
        <div className={`nav-bar ${activeTab === 'hebergements' ? 'active' : ''}`} />
        <div className={`nav-bar ${activeTab === 'activites' ? 'active' : ''}`} />
      </div>
    </nav>
  )
}

export default Navigation
