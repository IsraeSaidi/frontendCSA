// Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style/card.css';

const Card = ({ title, content, imageUrl, buttonText, routeTo, width }) => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(routeTo); 
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className="card-header">
        <p>{title}</p>
      </div>
      <div className="card-body">
        <img src={imageUrl} alt={`Image for ${title}`} width={width} />
        <p id="content">{content}</p>
        {buttonText && <button className='btn'>{buttonText}</button>}
      </div>
    </div>
  );
};

export default Card;
