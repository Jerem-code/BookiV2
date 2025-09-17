import React from 'react';
import './Headline.scss';

interface HeadlineProps {
  title: string;
  subtitle: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, subtitle }) => {
  return (
    <div className="headline">
      <h1 className="headline__title">{title}</h1>
      <p className="headline__subtitle">{subtitle}</p>
    </div>
  );
};

export default Headline;
