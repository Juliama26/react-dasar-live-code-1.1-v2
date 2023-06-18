import React from "react";
const Card = ({ data }) => {
  const { imageUrl, name, occupation, cloth, constellation } = data;
  return (
    <div className="character-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{occupation}</p>
      <p>{cloth}</p>
      <p>{constellation}</p>
    </div>
  );
};

export default Card;
