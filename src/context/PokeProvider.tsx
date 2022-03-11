import { useEffect, useReducer } from "react"
import { Pokemon } from "../interfaces/Pokemon";
import { PokeContext } from "./PokeContext";
import { PokeReducer } from "./PokeReducer";

interface props {
    children: JSX.Element | JSX.Element[]
}

const initial_state = {
    pokemons: [
        {
            name: 'holiday',
            id: -1,
            img: 'http'
        },
    ],
}

const PokeProvider = ({ children }: props) => {
    const [pokestate, dispatch] = useReducer(PokeReducer, initial_state, () => {
        const localData = localStorage.getItem('pokemons');
        return localData ? JSON.parse(localData) : localStorage.setItem('pokemons', JSON.stringify(initial_state));
    });

    useEffect(() => {
        if (pokestate === undefined) {
            localStorage.setItem('pokemons', JSON.stringify(initial_state))
        } else {
            localStorage.setItem('pokemons', JSON.stringify(pokestate))
        }
    }, [pokestate]);

    const addPokemon = (pokemon: Pokemon) => {
        dispatch({ type: 'addFavorites', payload: pokemon })
    }
    const deletePokemon = (id: number) => {
        dispatch({ type: 'delete', payload: { id } })
    }

    return (
        <PokeContext.Provider value={{ pokestate, addPokemon, deletePokemon }}>
            {children}
        </PokeContext.Provider>
    )

}
export default PokeProvider