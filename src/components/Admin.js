import Card from '../components/Card'
import NavBar from './NavBar';
import NavBarJaune from './NavBarJaune';
import enseignant from '../images/enseignant.png';
import formation from '../images/formation.png';
import promotion from '../images/promotion.jpg';
import etudiant from '../images/etudiant.png';

const Admin = () => {
    const handleCardClick = () => {
        console.log('Card clicked!');
      };
    
      // Données des cartes
      const cardData = [
        { title: ' Enseignants', buttonText: 'Ouvrir', onCardClick: handleCardClick, imageUrl:enseignant, width:'100px', routeTo:'/admin-page/enseignants'},
        { title: ' Formations', buttonText: 'Ouvrir', onCardClick: handleCardClick, imageUrl:formation, width:'100px', routeTo:'/enseignant-page'},
        { title: ' Promotions', buttonText: 'Ouvrir', onCardClick: handleCardClick, imageUrl:promotion, width:'100px' },
        { title: ' Etudiants', buttonText: 'Ouvrir', onCardClick: handleCardClick, imageUrl:etudiant, width:'100px' },


    
        // Ajoutez d'autres cartes ici
      ];
    
      return (
        <div id="body-component">
          <div><NavBar></NavBar></div>
          <div><NavBarJaune></NavBarJaune></div>
          <br></br>
        <div className="card-list">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        </div>
      );
    };
export default Admin