import { Box, Button, Container, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { SwitchPage } from "./SwitchPage"
import { usePoke } from "../hooks/usePoke"


export const Header = () => {

    const bg = useColorModeValue("white", "gray.800");

    const { pokestate } = usePoke();

    return (
        <Box w="100%" pos='fixed' bg={bg} zIndex={10}>
            <Container top={0} left={0} maxW='container.xl'>
                <Flex align='center' display='flex' justifyContent='space-between' flexDirection={['column', 'column', 'row']}>
                    <Link to="/">
                        <Flex d='flex' align='center'>
                            <img
                                width={90}
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" alt="PokeBall" />
                            <Text fontSize='3xl' fontWeight='semibold' ml='-5'>POKE&#9829;</Text>
                        </Flex>
                    </Link>
                    <Flex d='flex' align='center'>
                        <Link to="/">
                            <Button colorScheme='teal' size='lg' variant='link' mr='20px'>Home</Button>
                        </Link>
                        <Link to="/pokemons">
                            <Button colorScheme='teal' size='lg' variant='link' mr='20px'>Pokemons</Button>
                        </Link>
                        <Link to="/pokemons/favorites">
                            <Button colorScheme='teal' size='lg' variant='link' mr='10px'>Yours {pokestate?.pokemons?.length}&#128147;</Button>
                        </Link>
                        <SwitchPage />
                    </Flex>
                </Flex>
            </Container >
        </Box >
    )
}
