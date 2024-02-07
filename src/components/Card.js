// Card.js
import React from 'react';
import '../style/card.css';

const Card = ({ title, content, imageUrl, buttonText, onCardClick, width}) => {
  return (
    <div className="card-container" onClick={onCardClick}>
      <div className="card-header">
        <p>{title}</p>
      </div>
      <div className="card-body">
        <img src={imageUrl} alt={`Image for ${title}`} width={width}/>
        <p id="content">{content}</p>
        {buttonText && <button>{buttonText}</button>}
      </div>
    </div>
  );
};

export default Card;
