import { Pokemon } from "interfaces";
import { pokeApi } from "../api";

export const getPokemon = async (nameOrId: string) => { 

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }

  return {
    pokemon
  };
 }