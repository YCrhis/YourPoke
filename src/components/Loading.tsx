import { Box, Image, Spinner, Text } from "@chakra-ui/react"
import { bannerAnimation, transition2 } from "../animations"
import { motion } from "framer-motion"

export const Loading = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition2}
            variants={bannerAnimation}
            key="load_new"
        >
            <Box w="80%" margin="auto" textAlign='center'>
                <Text fontSize='4xl' mb="10px" fontWeight='semibold'>Loading Information ...</Text>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='teal.400'
                    size='xl'
                    display='block'
                    margin='auto'
                    marginBottom='30px'
                />
                <Image
                    width='200px'
                    margin="auto"
                    marginBottom='10px'
                    src="https://66.media.tumblr.com/tumblr_mai132OrFS1rfjowdo1_500.gif"
                />
                <Text color="gray" mb="10px" fontWeight='semibold'>If the information takes time to load, the pokemon probably does not exist</Text>
            </Box>
        </motion.div>
    )
}
