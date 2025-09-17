import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Marseille, France",
  value = "Marseille, France",
  onChange,
  onSearch
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleSearch = () => {
    onSearch?.();
  };

  return (
    <div className="search-bar">
      <div className="search-bar__location">
        <div className="search-bar__location-icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
      </div>
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
      <button className="search-bar__button" onClick={handleSearch}>
        <span className="search-bar__button-text">Rechercher</span>
        <FontAwesomeIcon 
          icon={faSearch} 
          className="search-bar__button-icon"
        />
      </button>
    </div>
  );
};

export default SearchBar;
