import React, { useEffect, useState } from "react";
import axios from 'axios'
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
import { toFirstCharUpperCase } from './constants'

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

function Pokedex(props) {
  const {history} = props
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then(function (res) {
      // 'data' comes natively inside response for any api request
      const {data} = res
      const {results} = data
      const newPokemonData = {}
      // pokemon 是一个object, index 是results array 的 index, 从0开始
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
      })
      setPokemonData(newPokemonData)
    })
  }, [])

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick={() => history.push(`/pokemon/${pokemonId}`)}>
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
