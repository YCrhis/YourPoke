import { PokemonList, Pokemon } from "../interfaces/Pokemon";

type PokemonActions =
    | { type: 'addFavorites', payload: Pokemon }
    | { type: 'delete', payload: { id: number } }

export const PokeReducer = (state: PokemonList, action: PokemonActions): PokemonList => {
    switch (action.type) {

        case 'addFavorites':
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        case 'delete':
            return {
                ...state,
                pokemons: state?.pokemons?.filter(pokemon => pokemon.id !== action.payload.id)
            }

        default:
            return state;
    }
}
