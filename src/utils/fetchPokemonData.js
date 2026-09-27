const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

async function fetchPokemonData(ids) {
  const responses = await Promise.all(
    ids.map(async (id) => {
      const res = fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`);

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      return res.json();
    }),
  );

  return responses.map(({ id, name, sprites }) => {
    const imgUrl = sprites.other["official-artwork"].front_default;

    return { id, name, imgUrl };
  });
}

export default fetchPokemonData;
