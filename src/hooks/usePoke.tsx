import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"

export const usePoke = () => {

    const { pokestate, addPokemon, deletePokemon } = useContext(PokeContext);

    return {
        pokestate,
        addPokemon,
        deletePokemon
    }

}
