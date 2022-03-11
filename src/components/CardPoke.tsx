import { Box, Button, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { bannerAnimation, transition } from '../animations';
import { StarIcon } from '@chakra-ui/icons'
import { usePoke } from '../hooks/usePoke';

interface cardProps {
    image: string;
    name: string;
    id: number;
}

export const CardPoke = ({ image, name, id }: cardProps) => {

    const bg = useColorModeValue("gray.50", "gray.900");

    const { addPokemon } = usePoke();

    const handleAddPokemon = () => {
        addPokemon({
            name: name,
            id: id,
            img: image
        })
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={bannerAnimation}
            key="card__new"
        >
            <Box cursor='pointer' position='relative' textAlign='center' bg={bg} px='6px' py='50px' boxShadow='lg' borderRadius='40px' width='250px' margin="auto">
                <Image
                    src={image}
                    alt={name}
                    boxSize='150px'
                    margin='auto'
                />
                <Text fontSize='xl' fontWeight='bold'>{name}</Text>
                <Button leftIcon={<StarIcon />} mt="15px" colorScheme='teal' variant='outline' onClick={handleAddPokemon}>Favorite</Button>
            </Box>
        </motion.div>
    )
}
