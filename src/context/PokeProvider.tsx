import { useEffect, useReducer } from "react"
import { Pokemon, PokemonList } from "../interfaces/Pokemon";
import { PokeContext } from "./PokeContext";
import { PokeReducer } from "./PokeReducer";

interface props {
    children: JSX.Element | JSX.Element[]
}

const initial_state: PokemonList = {
    pokemons: [
        {
            name: 'holiday',
            id: -1,
            img: 'https://static.wixstatic.com/media/1756ec_079eb8009408447ba10a65100f84f12d~mv2.gif'
        },
    ],
}

const PokeProvider = ({ children }: props) => {

    const [pokestate, dispatch] = useReducer(PokeReducer, initial_state);

    const addPokemon = (pokemon: Pokemon) => {
        dispatch({ type: 'addFavorites', payload: pokemon })
    }
    const deletePokemon = (id: number) => {
        dispatch({ type: 'delete', payload: { id } })
    }

    return (
        <PokeContext.Provider value={{ addPokemon, deletePokemon, pokestate }}>
            {children}
        </PokeContext.Provider>
    )

}
export default PokeProvider