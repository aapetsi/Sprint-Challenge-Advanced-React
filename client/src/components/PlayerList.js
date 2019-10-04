import React, { useState, useEffect } from "react";
import Player from "./Player";
import uuid from "uuid";

const PlayerList = ({ searches }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(searches);
  }, [searches]);

  if (players.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <p>Player list</p>
      {players.map(player => (
        <Player
          country={player.country}
          name={player.name}
          searches={player.searches}
          id={player.id}
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default PlayerList;
