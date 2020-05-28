import React from "react";

const Card = ({ name, id, type, level }) => {
  // console.log(name);
  return (
    <div className="pokemon">
      <div className="pokemon__imgContainer">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={name}
          className="pokemon__img"
        />
      </div>

      <div className="pokemon__content">
        <h2 className="pokemon__title">{name}</h2>
        <p className="pokemon__type"> type: {type}</p>
      </div>
      <p className="pokemon__level">Lv. {level}</p>
    </div>
  );
};

export default Card;
