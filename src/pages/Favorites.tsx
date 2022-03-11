import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { usePoke } from "../hooks/usePoke"
import { DeleteIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"
import { bannerAnimation, transition } from "../animations"
import { NoPoke } from "../components/NoPoke"

export const Favorites = () => {

    const { pokestate, deletePokemon } = usePoke();

    const handleDeletePokemon = (id: number) => {
        const poke = window.confirm('Do you want to delete this pokemon? ╭( ◕﹏◕ )╮');
        if (poke === true) {
            deletePokemon(id)
        }
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={bannerAnimation}
            key="card"
        >
            <Box textAlign='center'>
                <Text fontSize='6xl' color='teal.300' fontWeight='bold' mb="70px">Your Favorites Pokemons</Text>
            </Box>
            <SimpleGrid minChildWidth='300px' spacing='80px'>
                {pokestate?.pokemons?.length > 0 ?
                    pokestate?.pokemons?.map((pokemon: any) => (
                        <Box boxShadow='xl' width="300px" margin="auto" key={pokemon.id}>
                            <Flex alignItems="center" justifyContent='space-between'>
                                <Flex alignItems="center">
                                    <Image
                                        width='160px'
                                        src={pokemon.img}
                                    />
                                    <Box>
                                        <Text fontWeight='bold' color="pink.400">Name</Text>
                                        <Text>{pokemon.name}</Text>
                                    </Box>
                                </Flex>
                                <Box bg="pink.300" w="10%" h="160px" display='flex' alignItems='center' justifyContent='center'
                                    onClick={() => handleDeletePokemon(pokemon.id)}
                                >
                                    <DeleteIcon w='40px' cursor='pointer' />
                                </Box>
                            </Flex>
                        </Box>

                    ))
                    :
                    <NoPoke />
                }
            </SimpleGrid>
        </motion.div>
    )
}
