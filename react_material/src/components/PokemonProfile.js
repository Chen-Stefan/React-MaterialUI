import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import React, { useState } from "react";
import { toFirstCharUpperCase } from "./constants";

function PokemonProfile(props) {
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  // 1. pokemon-undefined, that means we're getting the info
  // -> return a circular loading progress bar
  // 2. pokemon = good data, that means we've gotten the info
  // -> return actual info
  // 3. pokemon = bad data / false
  // -> return pokemon not found

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUpperCase(name)}
          <img src={front_default} />
        </Typography>
        <img src={fullImageUrl} style={{ width: "300px", height: "300px" }} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography variant="h6">Types:</Typography>
        {types.map((typeInfo) => {
          // 注意这里怎么把typeinfo destructure, 结合mock data 一起看
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}>{`${name}`}</Typography>;
        })}
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon && generatePokemonJSX()}
      {pokemon === false && (
        <Typography>Pokemon not found you dumbass</Typography>
      )}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          BACK TO POKEDEX
        </Button>
      )}
    </>
  );
}

export default PokemonProfile;
