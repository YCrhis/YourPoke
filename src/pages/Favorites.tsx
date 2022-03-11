import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { usePoke } from "../hooks/usePoke"
import { DeleteIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"
import { bannerAnimation, transition } from "../animations"

export const Favorites = () => {

    const { pokestate, deletePokemon } = usePoke();

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
                {pokestate.pokemons.map((pokemon: any) => (

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
                            <Box bg="pink.300" w="10%" h="160px" display='flex' alignItems='center' justifyContent='center'>
                                <DeleteIcon w='40px' cursor='pointer' onClick={() => deletePokemon(pokemon.id)} />
                            </Box>
                        </Flex>
                    </Box>

                ))}
            </SimpleGrid>
        </motion.div>
    )
}
