import { useState } from "react";
import { getPokemon, getPokemonData } from "../apis";

export const useApi = () => {

    const [pokemons, setPokemons] = useState<any[]>([]);

    const [page, setPage] = useState<any>(0);

    const [totalPage, setTotalPage] = useState(0);

    const [loading, setLoading] = useState(false)

    const loadPokemon = async () => {
        setLoading(false)
        const data = await getPokemon(25, 25 * page);
        const promises = data.results.map(async (pokemon: any) => {
            return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results);
        setTotalPage(Math.ceil(data.count / 25))
        setLoading(true)
    }

    return {
        page, totalPage, setPage, pokemons, loadPokemon, loading, setTotalPage, setPokemons, setLoading
    }
}
