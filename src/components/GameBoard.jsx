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

function GameBoard({ currentScore, updateScore, updateBestScore, resetGame }) {
  const [round, setRound] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState(new Set());

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

  return (
    <div className="main-grid">
      {pokemons.map(({ id, name, imgUrl }) => {
        <div key={id} className="card">
          <img src={imgUrl} alt={name} />
          <p>{name}</p>
        </div>
      })}
    </div>
  )
}

export default GameBoard;
