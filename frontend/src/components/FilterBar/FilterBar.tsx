import React from 'react';
import { 
  faEuroSign, 
  faUsers, 
  faHeart, 
  faFire 
} from '@fortawesome/free-solid-svg-icons';
import FilterButton from '../FilterButton/FilterButton';
import './FilterBar.scss';

interface FilterBarProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  activeFilter = 'nos-pepites', 
  onFilterChange 
}) => {
  const filters = [
    { id: 'economique', text: 'Économique', icon: faEuroSign },
    { id: 'familial', text: 'Familial', icon: faUsers },
    { id: 'romantique', text: 'Romantique', icon: faHeart },
    { id: 'nos-pepites', text: 'Nos pépites', icon: faFire }
  ];

  const handleFilterClick = (filterId: string) => {
    onFilterChange?.(filterId);
  };

  return (
    <div className="filter-bar">
      <h2 className="filter-bar__title">Filtres</h2>
      <div className="filter-bar__buttons">
        {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            text={filter.text}
            icon={filter.icon}
            isActive={activeFilter === filter.id}
            onClick={() => handleFilterClick(filter.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
