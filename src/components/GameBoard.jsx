import { useEffect, useState } from "react";
import fetchPokemonData from "../utils/fetchPokemonData";
import shuffleArray from "../utils/shuffleArray";

const POKEMON_IDS = [
  25, // Pikachu
  6, //Charizard
  133, //Eevee
  1, //Bulbasaur
  7, //Squirtle
  150, //Mewtwo
  94, //Gengar
  143, //Snorlax
  39, //Jigglypuff
  52, //Meowth
  54, //Psyduck
  81, //Magnemite
];

function GameBoard() {
  const [round, setRound] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let ignore = false;

    const shuffledPokemonIds = shuffleArray([...POKEMON_IDS]);

    fetchPokemonData(shuffledPokemonIds).then((res) => {
      if (!ignore) {
        setPokemons(res);
      }
    });

    return () => {
      ignore = true;
    };
  }, [round]);
}

export default GameBoard;
