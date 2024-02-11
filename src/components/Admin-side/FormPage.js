import React from 'react';
import NavBar from '../NavBar';
import NavBarJaune from '../NavBarJaune';
import FormEnseignant from './FormEnseignant';
import { useParams } from 'react-router-dom';
import '../../style/form.css';
const AjouterEnseignant = () => {
  return (
 
  <div id="formComponent">
    <NavBar></NavBar>
      <NavBarJaune></NavBarJaune>
      <FormEnseignant />
    </div>
    
  );
};

const ModifierEnseignant = ({ match }) => {
    const { id } = useParams();

    return (
      <div>
        <NavBar></NavBar>
        <NavBarJaune></NavBarJaune>
        <FormEnseignant isModification={true} enseignantId={id} />
      </div>
    );
};

export { AjouterEnseignant, ModifierEnseignant };
