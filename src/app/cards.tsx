import {useState} from 'react';
import Image from 'next/image';
import React from 'react';
import CardData from './cardsInfo.json'; // Assuming the JSON file is in the same directory

function CardComponent({ card }: { card: any }) {
  return (
    <div className="card" style={{ marginLeft: 375, height: 500 }}>
      <Image src={card.imageUrl} width={250} height={250} alt="Product" />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <span>Price: ${card.price}</span>
      <br />
      <a href={card.BuyUrl} className="btn">
        Buy Now!
      </a>
    </div>
  );
}

function Card() {
  const [cardData, setCardData] = useState(CardData);

  return (
    <div className="cardsBG">
      {cardData.map((card, index) => (
        <CardComponent key={index} card={card} />
      ))}
    </div>
  );
}

export default Card;
