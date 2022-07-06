import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  CardMedia: {
    margin: "auto"
  },
  CardContent: {
    textAlign: 'center'
  }
});
// 这里的pokemonId是个string, 是mockData里的key
function toFirstCharUpperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function Pokedex(pokemonId) {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);

  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card>
          <CardMedia
            className={classes.CardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          ></CardMedia>
          <CardContent className={classes.CardContent}>
            <Typography>{`${id}.${toFirstCharUpperCase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {/* 如果pokemonData存在，就显示grid; 如果不存在，就显示loading的图标 */}
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Pokedex;
