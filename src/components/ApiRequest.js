import Axios from "axios";

export const fetchAllPokemon = async (url) => {
  try {
    const { data } = await Axios.get(url);
    return data.results;
  } catch (error) {}
};

export const fetchPokemonData = async (url) => {
  try {
    const data = await Axios.get(url);

    return data.data;
  } catch {}
};
