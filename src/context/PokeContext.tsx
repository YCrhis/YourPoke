import { createContext } from "react";
import { Pokemon, PokemonList } from "../interfaces/Pokemon";

export type PokeContextProps = {
    addPokemon: (pokemon: Pokemon) => void;
    deletePokemon: (id: number) => void;
    pokestate: PokemonList;
}

export const PokeContext = createContext<PokeContextProps>({} as PokeContextProps)