
// ListeEnseignants.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/Liste.css';
import NavBar from '../NavBar';
import NavBarJaune from '../NavBarJaune';
import { useNavigate } from 'react-router-dom';
import FormEnseignant from './FormEnseignant';

const ListeEnseignants = () => {
  const [enseignants, setEnseignants] = useState([]);
  const [isModifying, setIsModifying] = useState(false);
  const [enseignantIdToModify, setEnseignantIdToModify] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnseignants = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token non trouvé');
          return;
        }
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get('http://localhost:8080/admin/enseignants', { headers });
        console.log('Données des enseignants:', response.data);
        setEnseignants(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des enseignants', error);
      }
    };
    fetchEnseignants();
  }, []);

  const handleAjouterNouveauEnseignant = () => {
    setIsModifying(false);
    setEnseignantIdToModify(null);
    setShowForm(true);
    navigate('/admin-page/ajouterEnseignant')
  };

  const handleModifier = (id) => {
    setIsModifying(true);
    setEnseignantIdToModify(id);
    setShowForm(true);
    navigate(`/admin-page/modifierEnseignant/${id}`);
  };

  const handleSupprimer = async (id) => {
    try {
      const token = localStorage.getItem('token');
     console.log(token);
     
     if (!token) {
       console.error('Token non trouvé');
       return;
     }
     const headers = {
       Authorization: `Bearer ${token}`,
     };
   
   await axios.delete(`http://localhost:8080/admin/enseignants/${id}`, { headers });

   console.log('Supprimer clicked for enseignant with id', id);
   
   // Update the enseignants list after deletion
   const updatedEnseignants = enseignants.filter(enseignant => enseignant.noEnseignant !== id);
   setEnseignants(updatedEnseignants);
 } catch (error) {
   console.error('Erreur lors de la suppression de l\'enseignant', error);
 }
  };

  const handleVoirDetails = (id) => {
    
    navigate(`/admin-page/enseignant/${id}`);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div id="containerEns">
      <NavBar></NavBar>
      <NavBarJaune></NavBarJaune>
      <h1>Liste des enseignants</h1>
      <button className="ajouter-btn" onClick={handleAjouterNouveauEnseignant}>
        Ajouter Nouveau Enseignant
      </button>
      {showForm && (
        <FormEnseignant
          isModification={isModifying}
          enseignantId={enseignantIdToModify}
          onClose={handleCloseForm}
        />
      )}
      <table>
        <thead>
        <tr>
            <th>NO</th>
           <th>Nom</th>
             <th>Prenom</th>
<th>Sexe</th>
            <th>Type</th>
           <th>Ville</th>
           <th>Code postal</th>
            <th>Pays</th>
            <th>Telephone Personnel</th>
           <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enseignants.map((enseignant) => (
            <tr key={enseignant.noEnseignant}>
              <td>{enseignant.noEnseignant}</td>
               <td>{enseignant.nom}</td>
               <td>{enseignant.prenom}</td>
               <td>{enseignant.sexe}</td>
               <td>{enseignant.type}</td>
               <td>{enseignant.ville}</td>
               <td>{enseignant.cp}</td>
               <td>{enseignant.pays}</td>
               <td>{enseignant.telPort}</td>
               <td>
                 <button className='btnModifier' onClick={() => handleModifier(enseignant.noEnseignant)}>Modifier</button>
                 <button className='btnSupprimer' onClick={() => handleSupprimer(enseignant.noEnseignant)}>Supprimer</button>
                 <button className='btnVoir' onClick={() => handleVoirDetails(enseignant.noEnseignant)}>Voir Détails</button>
               </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeEnseignants;
