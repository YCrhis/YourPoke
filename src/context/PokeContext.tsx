import { createContext } from "react";
import { Pokemon } from "../interfaces/Pokemon";

export type PokeContextProps = {
    pokestate: any;
    addPokemon: (pokemon: Pokemon) => void;
    deletePokemon: (id: number) => void;
}

export const PokeContext = createContext<PokeContextProps>({} as PokeContextProps)