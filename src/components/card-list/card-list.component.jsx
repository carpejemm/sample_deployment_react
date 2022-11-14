import Card from '../card/card.component';
import './card-list.styles.css';

// STEP 3.2 - .map() and UI
const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
