import React from "react";
import Player from "./Player";

const PlayerList = ({ searches }) => {
  return (
    <div>
      <p>Player list</p>
      {searches.map(search => (
        <Player
          country={search.country}
          name={search.name}
          searches={search.searches}
          id={search.id}
          key={search.id}
        />
      ))}
    </div>
  );
};

export default PlayerList;
