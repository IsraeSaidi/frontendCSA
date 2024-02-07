// App.js
import React from 'react';
import Card from './components/Card';
import './style/card.css';
import imageCard1 from './images/card1.png';
import imageCard2 from './images/card2.png';
import imageCard3 from './images/card3.png';
import imageCard4 from './images/card4.png';
import imageCard5 from './images/card5.jpg';


const App = () => {
  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  // Données des cartes
  const cardData = [
    { title: ' Actualités DDRS', buttonText: 'Ouvrir', onCardClick: handleCardClick, imageUrl:imageCard1 },
    { title: 'Actualités de l\'UBO', buttonText: 'Ouvrir', onCardClick: handleCardClick, imageUrl:imageCard2, width:'55px' },
    { title: 'Activer votre compte', content: 'Nouvel arivant à l\'UBO ? Activez votre compte informatique!' ,onCardClick: handleCardClick, imageUrl:imageCard3, width:'53px' },
    { title: 'Connexion à l\'ENT',onCardClick: handleCardClick, imageUrl:imageCard4, width:'50px'  },
    { title: 'Connexion à l\'ENT',onCardClick: handleCardClick, imageUrl:imageCard5  }


    // Ajoutez d'autres cartes ici
  ];

  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;
