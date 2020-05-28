import React from "react";

import Card from "./Card";

const CardList = ({ pokemonData }) => {
  return (
    <div className="grid">
      {pokemonData.map((p, i) => {
        const poke_type = p.types.map((type) => type.type.name);
        const type = poke_type.find((type) => poke_type.indexOf(type) > -1);
        const lvl = Math.floor(Math.random() * 100) + 1;

        return <Card key={i} name={p.name} id={p.id} type={type} level={lvl} />;
      })}
    </div>
  );
};

export default CardList;
