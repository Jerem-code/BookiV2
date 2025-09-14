import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import './Header.scss'

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hebergements' | 'activites' | null>(null)

  const handleTabChange = (tab: 'hebergements' | 'activites') => {
    setActiveTab(tab)
  }

  return (
    <header className="header">
      {/* Logo centré */}
      <div className="header__logo">
        <Logo />
      </div>

      {/* Navigation centrée */}
      <div className="header__navigation">
        <Navigation 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
    </header>
  )
}

export default Header
