import React from 'react';
import '../style/navBar.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarJaune = () => {
  return (
    <div className="navbarJaune">
      <div className="left">
      <FontAwesomeIcon icon={faHome} />
      <p id="acc">Accueil</p>
      </div>
    
      
    </div>
  );
};

export default NavBarJaune;
