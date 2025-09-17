import React, { useState } from 'react';
import Headline from '../Headline/Headline';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import InfoBar from '../InfoBar/InfoBar';
import './InfoGroup.scss';

const InfoGroup: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('nos-pepites');
  const [searchValue, setSearchValue] = useState('Marseille, France');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearch = () => {
    console.log('Recherche pour:', searchValue);
  };

  return (
    <div className="info-group">
      <Headline
        title="Trouvez votre hébergement pour des vacances de rêve"
        subtitle="En plein centre-ville ou en pleine nature"
      />
      
      <SearchBar
        value={searchValue}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />
      
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      
      <InfoBar message="Plus de 500 logements sont disponibles dans cette ville" />
    </div>
  );
};

export default InfoGroup;
