// Routes.js
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Login from './Authentification/Login'; // Import your Login component
import Admin from './components/Admin';
import Etudiant from './components/Etudiant';
import Enseignant from './components/Enseignant';
import App from './App';
import ListeEnseignants from './components/Admin-side/ListeEnseignants';
import { ModifierEnseignant, AjouterEnseignant } from './components/Admin-side/FormPage';
import Details from './components/Admin-side/Details';


const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-page" element={<Admin />} />
      <Route path="/etudiant-page" element={<Etudiant />} />
      <Route path="/enseignant-page" element={<Enseignant />} />
      <Route path="/admin-page/enseignants" element={<ListeEnseignants/>} />
      <Route path="/admin-page/ajouterEnseignant" element={<AjouterEnseignant />} />
      <Route path="/admin-page/modifierEnseignant/:id" element={<ModifierEnseignant />} />
      <Route path="/admin-page/enseignant/:id" element={<Details />} />
    </ReactRoutes>
  );
};

export default Routes;
