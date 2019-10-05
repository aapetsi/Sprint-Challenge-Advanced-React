import React from "react";
import { Typography } from "@material-ui/core";

const Player = ({ country, name, searches, id }) => {
  return (
    <div>
      <Typography variant="h6">Name: {name}</Typography>
      <Typography variant="h6">Country: {country}</Typography>
      <Typography variant="h6">Search Count: {searches}</Typography>
    </div>
  );
};

export default Player;
