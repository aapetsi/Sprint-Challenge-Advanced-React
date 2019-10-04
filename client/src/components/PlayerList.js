import React, { useState, useEffect } from "react";
import Player from "./Player";
import uuid from "uuid";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 150,
    width: 300,
    textAlign: "center",
    backgroundColor: "rgba(224, 234, 252, 0.308)"
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const PlayerList = ({ searches }) => {
  const classes = useStyles();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(searches);
  }, [searches]);

  if (players.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Typography className="text-center" variant="h4">
        Player list
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {players.map(player => (
              <Grid key={uuid()} item>
                <Paper className={classes.paper}>
                  <Player
                    country={player.country}
                    name={player.name}
                    searches={player.searches}
                    id={player.id}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlayerList;
