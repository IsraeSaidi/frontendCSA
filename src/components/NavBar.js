import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom
import '../style/navBar.css';

const NavBar = () => {
  const navigate = useNavigate(); // Initialiser la fonction `navigate`

  const handleConnexionClick = () => {
    navigate('/login'); // Utiliser `navigate` pour rediriger vers la page /login
  };

  return (
    <div className="navbar">
      <div className="left">
        <img id="logo" src={require('../images/ubo-logo.png')} className='logo' alt="Logo" />
        <p id="ent">Mon ENT</p>
      </div>
      <div className="right">
        <button id="connexion" onClick={handleConnexionClick}>
          Connexion
        </button>
      </div>
    </div>
  );
};

export default NavBar;
