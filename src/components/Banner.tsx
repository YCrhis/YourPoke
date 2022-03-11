import { Box, Image, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import { bannerAnimation, transition } from "../animations";

export const Banner = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={bannerAnimation}
        >
            <Box w="100%" h='80vh' d='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <Image
                    src="https://static.wixstatic.com/media/924717_27816e195c2f43a39bbbacac65771804~mv2.gif"
                    alt="poke"
                    boxSize='250px'
                    mb="-1.5"
                />
                <Text fontWeight='bolder' className="title">WELCOME TO</Text>
                <Text fontWeight='bolder' className="title" color='teal.400' mt="-6">POKE&#128147;</Text>
            </Box>
        </motion.div>
    )
}
