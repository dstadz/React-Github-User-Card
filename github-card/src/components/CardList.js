import React from 'react'
import Card from './Card'
// your components will all go in this `component` directory.
// feel free to change this component.js into cardList.js

const CardList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="card-list">
      {props.cards.map(card => (
        <Card
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};

export default CardList;