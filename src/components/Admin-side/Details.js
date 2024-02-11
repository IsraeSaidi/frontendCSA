import React from 'react';
import NavBar from '../NavBar';
import NavBarJaune from '../NavBarJaune';
import DetailsEnseignant from './DetailsEnseignant';
import { useParams } from 'react-router-dom';
import '../../style/details.css';


const Details = ({ match }) => {
    const { id } = useParams();

    return (
      <div id="detailsComponent">
        <NavBar></NavBar>
        <NavBarJaune></NavBarJaune>
    
        <DetailsEnseignant enseignantId={id} />

      </div>
    
 
    );
};

export default Details;
