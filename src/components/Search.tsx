import { Box, Button, Input } from "@chakra-ui/react";
import { useForm } from "../hooks/useForm"
import { SearchIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion";
import { searchAnimation, transition } from "../animations";

export const Search = ({ handleSearch }: any) => {

    const { data, handleInputChange } = useForm({
        search: ''
    });

    const searchPokemon = async () => {
        handleSearch(data.search)
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={searchAnimation}
        >
            <Box w={['100%', '80%', '70%']} margin="auto" display="flex">
                <Input
                    type="text"
                    placeholder="Search Pokemon"
                    name="search"
                    onChange={handleInputChange}
                    marginRight="10px"
                />
                {data.search === '' ?
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        disabled
                        onClick={searchPokemon}
                        leftIcon={<SearchIcon />}
                    >Enter Name</Button>
                    :
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        onClick={searchPokemon}
                        leftIcon={<SearchIcon />}
                    >Search</Button>
                }
            </Box>
        </motion.div>
    )
}
