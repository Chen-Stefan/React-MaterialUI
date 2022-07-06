import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const getPokemonCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>Hi</CardContent>
      </Card>
    </Grid>
  );
};
function Pokedex() {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {/* 如果pokemonData存在，就显示grid; 如果不存在，就显示loading的图标 */}
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Pokedex;
