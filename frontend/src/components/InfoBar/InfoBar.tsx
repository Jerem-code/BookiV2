import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import './InfoBar.scss';

interface InfoBarProps {
  message: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ message }) => {
  return (
    <div className="info-bar">
      <div className="info-bar__icon">
        <FontAwesomeIcon icon={faInfo} />
      </div>
      <p className="info-bar__message">{message}</p>
    </div>
  );
};

export default InfoBar;
