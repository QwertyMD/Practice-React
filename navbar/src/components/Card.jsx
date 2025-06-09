import React, { useEffect, useState, useRef } from "react";
const Cards = () => {
  const [card, setCard] = useState([]);
  const getCardDetails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setCard(data);
  };
  useEffect(() => {
    getCardDetails();
  }, []);

  return (
    <div className="card-details grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {card.slice(0, 20).map((card) => {
        return (
          <div
            key={card.id}
            className="card border-2 border-[#ffbade] p-3 rounded-lg hover:scale-105 transition-transform cursor-default"
          >
            <h1>User Id: {card.userId}</h1>
            <h2 className="text-lg font-bold">{card.title}</h2>
            <p className="text-sm italic">{card.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
