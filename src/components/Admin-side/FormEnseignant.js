import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../style/form.css';
const FormEnseignant = ({ isModification, enseignantId }) => {
  const navigate = useNavigate();
  const [enseignantData, setEnseignantData] = useState({
    noEnseignant: '',
    type: '',
    sexe: '',
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    pays: '',
    telPort: '',
    encPersoTel: '',
    encUboTel: '',
    encPersoEmail: '',
    encUboEmail: '',
    intNoInsee: '',
    intSocNom: '',
    intSocAdresse: '',
    intSocCp: '',
    intSocVille: '',
    intSocPays: '',
    intFonction: '',
    intProfEmail: '',
    intProfTel: '',
  });

  useEffect(() => {
    if (isModification) {
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
          const enseignantDetails = response.data;
          setEnseignantData(enseignantDetails);
        } catch (error) {
          console.error('Erreur lors de la récupération des détails de l\'enseignant', error);
        }
      };

      fetchEnseignantDetails();
    }
  }, [isModification, enseignantId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnseignantData({ ...enseignantData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token non trouvé');
        return;
      }
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const apiEndpoint = isModification
        ? `http://localhost:8080/admin/enseignants/${enseignantId}`
        : 'http://localhost:8080/admin/enseignants';

      const response = isModification
        ? await axios.put(apiEndpoint, enseignantData, { headers })
        : await axios.post(apiEndpoint, enseignantData, { headers });

      if (response.status === 200 || response.status === 201) {
        navigate('/admin-page/enseignants');
      } else {
        console.error('Erreur lors de l\'opération sur l\'enseignant');
      }
    } catch (error) {
      console.error('Erreur lors de l\'opération sur l\'enseignant', error);
    }
  };

  return (
    <div>
         
    <form onSubmit={handleSubmit} id='formulaire'>
    <h1 id='titre' className='label-large'>Gestion des enseignants</h1>
      <label>
        No Enseignant:
        <input type="text" className='input' name="noEnseignant" value={enseignantData.noEnseignant} onChange={handleInputChange}/>
      </label>
      <label>
        Type:
        <select name="type" className='input' value={enseignantData.type} onChange={handleInputChange}>
        <option value="#">----------------- Selectionner le Type -----------------</option>
        <option value="Professeur">Professeur</option>
        <option value="Assistant">Assistant</option>
        <option value="Chercheur">Chercheur</option>
       
      </select>
      </label>
      <label>
        Nom:
        <input type="text" className='input' name="nom" value={enseignantData.nom} onChange={handleInputChange}/>
      </label>
          
      <label>
        Prenom:
        <input type="text" className='input' name="prenom" value={enseignantData.prenom} onChange={handleInputChange}/>
      </label>

      <label>
        Sexe:
       
        <select name="sexe" className='input' value={enseignantData.sexe} onChange={handleInputChange}>
        <option value="#">----------------- Selectionner le Sexe -----------------</option>
        <option value="F">Femme</option>
        <option value="H">Homme</option>

      </select>
      </label>

      <label>
        Adresse:
        <input type="text" className='input' name="adresse" value={enseignantData.adresse} onChange={handleInputChange}/>
      </label>
  
      <label>
        Ville:
        <input type="text" className='input' name="ville" value={enseignantData.ville} onChange={handleInputChange}/>
      </label>
      <label>
        Code postal:
        <input type="text" className='input' name="cp" value={enseignantData.cp} onChange={handleInputChange}/>
      </label>
      <label>
        Pays:
        <input type="text" className='input' name="pays" value={enseignantData.pays} onChange={handleInputChange}/>
      </label>
      <label>
        Tel-Portable:
        <input type="text"  className='input' name="telPort" value={enseignantData.telPort} onChange={handleInputChange}/>
      </label>
      <label>
      Enc-Perso-Tel:
        <input type="text"  className='input' name="encPersoTel" value={enseignantData.encPersoTel} onChange={handleInputChange}/>
      </label>
      <label>
      Enc-Ubo-Tel:
        <input type="text" className='input' name="encUboTel" value={enseignantData.encUboTel} onChange={handleInputChange}/>
      </label>
      <label>
      Enc-Perso-Email:
        <input type="text"  className='input' name="encPersoEmail" value={enseignantData.encPersoEmail} onChange={handleInputChange}/>
      </label>
      <label>
      Enc-Ubo-Email:
        <input type="text" className='input' name="encUboEmail" value={enseignantData.encUboEmail} onChange={handleInputChange}/>
      </label>
      <label>
      No-Insee:
        <input type="text" className='input' name="intNoInsee" value={enseignantData.intNoInsee} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Soc-Nom:
        <input type="text" className='input' name="intSocNom" value={enseignantData.intSocNom} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Soc-Adresse:
        <input type="text" className='input' name="intSocAdresse" value={enseignantData.intSocAdresse} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Soc-Cp:
        <input type="text" className='input' name="intSocCp" value={enseignantData.intSocCp} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Soc-Ville:
        <input type="text" className='input' name="intSocVille" value={enseignantData.intSocVille} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Soc-Pays:
        <input type="text" className='input' name="intSocPays" value={enseignantData.intSocPays} onChange={handleInputChange}/>
      </label>

      <label>
      Int-Fonction:
        <input type="text" className='input' name="intFonction" value={enseignantData.intFonction} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Prof-Email:
        <input type="text" className='input' name="intProfEmail" value={enseignantData.intProfEmail} onChange={handleInputChange}/>
      </label>
      <label>
      Int-Prof-Tel:
        <input type="text" className='input' name="intProfTel" value={enseignantData.intProfTel} onChange={handleInputChange}/>
      </label>
      
      <button id='button' type="submit">
        {isModification ? 'Modifier Enseignant' : 'Ajouter Enseignant'}
      </button>
    </form>
    </div>
    
  );
};

export default FormEnseignant;
