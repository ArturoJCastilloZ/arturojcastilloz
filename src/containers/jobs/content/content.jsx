import React, { useState } from 'react';

const JobsContent = ({ start, end, title, institution, activity }) => {
  const maxLength = 140; // Número máximo de caracteres permitidos
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  let displayedText = activity;
  let buttonText = 'Ver más...';

  if (!showFullText && activity.length > maxLength) {
    displayedText = activity.substring(0, maxLength) + '...';
  } else {
    buttonText = 'Ver menos';
  }

  return (
    <div className='jobs-items-item' data-aos="zoom-in">
      <div className='jobs-dot'></div>
      <div className='jobs-items-item-date'>{start} - {end}</div>
      <div className='jobs-content'>
        {/* <img src={jobs.img} alt={jobs.institution} /> */}
        <h3>{title}</h3>
        <span>{institution}</span>
        <p>{displayedText}</p>
        {activity.length > maxLength && (
          <button className="button" onClick={handleToggleText}>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export { JobsContent };
