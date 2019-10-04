import React from "react";

const Player = ({ country, name, searches, id }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{country}</p>
      <p>{searches}</p>
    </div>
  );
};

export default Player;
