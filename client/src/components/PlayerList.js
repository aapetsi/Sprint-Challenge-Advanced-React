import React, { useState, useEffect } from "react";
import Player from "./Player";
import uuid from "uuid";
// import useLocalStorage from "../hooks/useLocalStorage";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import Pagination from "./Pagination";

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

  /* Stretch challenge */
  const [playersList, savePlayersList] = useState([searches]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = playersList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    return setCurrentPage(pageNumber);
  };
  /* Stretch challenge */

  useEffect(() => {
    setPlayers(searches);
  }, [searches]);

  useEffect(() => {
    savePlayersList(searches);
  }, [savePlayersList, searches]);

  if (players.length === 0) {
    return <h2>Loading...</h2>;
  }

  console.log(currentPosts);

  return (
    <div>
      <Typography className="text-center" variant="h4">
        Player list
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {currentPosts.map(player => (
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
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={searches.length}
      />
    </div>
  );
};

export default PlayerList;
