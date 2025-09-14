import React from 'react'
import logo from '../../assets/logo.svg'
import './Logo.scss'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logo} 
        alt="Booki" 
        className="header-logo"
      />
    </div>
  )
}

export default Logo
