import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"
import { searchPokemon } from "../apis"
import { CardPoke } from "../components/CardPoke";
import { HeroPoke } from "../components/HeroPoke";
import { Loading } from "../components/Loading";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search"
import { useApi } from "../hooks/useApi";

export const PokemonList = () => {

    const [error, setError] = useState(false)

    const { setTotalPage, setPokemons, setPage, page, loadPokemon, totalPage, pokemons, loading, setLoading } = useApi();

    const handleSearch = async (poke: string) => {
        setLoading(false)
        const data = await searchPokemon(poke);

        if (!data) {
            setError(true)
            setLoading(true)
        }
        else {
            setPokemons([data])
            setTotalPage(1)
        }
        setLoading(true)
    }

    const nextPage = () => {
        const rightPage = Math.max(page - 1, 0)
        setPage(rightPage)
    }

    const previusPage = () => {
        const leftPage = Math.min(page + 1, totalPage - 1)
        setPage(leftPage)
    }

    useEffect(() => {
        loadPokemon();
    }, [page])

    return (
        <div>
            <HeroPoke />
            <Search
                handleSearch={handleSearch}
            />

            <Pagination
                setPage={setPage}
                page={page + 1}
                totalPage={totalPage}
                nextPage={nextPage}
                previusPage={previusPage}
            />

            <Button mb="30px" colorScheme='teal' onClick={() => loadPokemon()}>See All The Pokemons</Button>

            <Box w="80%" margin="auto">
                <AnimatePresence exitBeforeEnter>
                    {loading ?
                        <SimpleGrid minChildWidth='200px' spacing='80px'>
                            {pokemons.map((pokemon) => (
                                <CardPoke
                                    key={pokemon.id}
                                    image={pokemon.sprites.front_default}
                                    name={pokemon.name}
                                    id={pokemon.id}
                                />
                            ))}
                        </SimpleGrid>
                        :
                        <Loading />
                    }
                </AnimatePresence>
            </Box>
        </div>
    )
}