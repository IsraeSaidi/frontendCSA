
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/details.css';

const DetailsEnseignant = ({ enseignantId }) => {
  const [enseignantDetails, setEnseignantDetails] = useState({});

  useEffect(() => {
    const fetchEnseignantDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token non trouvé');
          return;
        }
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`http://localhost:8080/admin/enseignants/${enseignantId}`, { headers });
        const details = response.data;
        setEnseignantDetails(details);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'enseignant', error);
      }
    };

    fetchEnseignantDetails();
  }, [enseignantId]);

  return (
    <div className="card">
    <div className="left-container">
      <img id='image' src={require('../../images/user.png')}  alt={"Profile"}/>
      <h2 id='h2' className="gradienttext">{enseignantDetails.nom} {enseignantDetails.prenom}</h2>
      <p id='para'>No Enseignant: {enseignantDetails.noEnseignant}</p>
      <p id='para'>Sexe : {enseignantDetails.sexe} - Type : {enseignantDetails.type}</p>
      
    </div>
    <div className="right-container">
      <h3 id='h3' className="gradienttext">Profile Details</h3>
      <table id='tableau'>
          
       
        <tr>
        <td id='td'>Pays :</td>
          <td id='td'>{enseignantDetails.pays}</td>
        </tr>
        <tr>
        <td id='td'>Ville :</td>
          <td id='td'>{enseignantDetails.ville} - {enseignantDetails.cp}</td>
        </tr>

        <tr>
        <td id='td'>Téléphone personnel :</td>
          <td id='td'>{enseignantDetails.telPort}</td>
        </tr>
        
        <tr>
        <td id='td'>Cordonnées personnelles :</td>
          <td id='td'>{enseignantDetails.encPersoTel}  --  {enseignantDetails.encPersoEmail}</td>
        </tr>
        <tr>
        <td id='td'>Cordonnées Universitaires :</td>
          <td id='td'>{enseignantDetails.encUboTel}  --  {enseignantDetails.encUboEmail}</td>
        </tr>
        <tr>
        <td id='td'>Cordonnées professionnelles :</td>
        <td id='td'>{enseignantDetails.intProfTel}  --  {enseignantDetails.intProfEmail}</td>
        </tr>
        <tr>
        <td id='td'>Informations de l'entreprise :</td>
        <td id='td'>Int-Soc-Nom : {enseignantDetails.intSocNom}</td>
        <td id='td'>No Inset : {enseignantDetails.intNoInsee}</td>
     
        </tr>
        <tr>
        <td id='td'>Int-Fonction: {enseignantDetails.intFonction}</td>
        </tr>
        
        <tr>
        <td id='td'>Int-Soc-Adresse : {enseignantDetails.intSocAdresse} -- {enseignantDetails.intSocPays}</td>
        
        </tr>

        <tr>
        <td id='td'>Int-Soc-Ville : {enseignantDetails.intSocVille} -- {enseignantDetails.cp} </td>
        </tr>
        
        

        

        
      </table>
    </div>
  </div>

  );
};

export default DetailsEnseignant;
