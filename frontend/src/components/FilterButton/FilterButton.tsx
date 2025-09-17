import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './FilterButton.scss';

interface FilterButtonProps {
  text: string;
  icon: IconDefinition;
  isActive?: boolean;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  text, 
  icon, 
  isActive = false, 
  onClick 
}) => {
  return (
    <button 
      className={`filter-button ${isActive ? 'filter-button--active' : ''}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="filter-button__icon" />
      <span className="filter-button__text">{text}</span>
    </button>
  );
};

export default FilterButton;
