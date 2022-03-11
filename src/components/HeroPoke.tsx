import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { bannerAnimation, transition } from "../animations"


export const HeroPoke = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={bannerAnimation}
        >
            <Box width='80%' m='auto' height='70vh'>
                <Flex align='center' justifyContent='space-between' flexDirection={['column', 'column', 'row']}>
                    <Box textAlign={['left', 'center', 'left']}>
                        <Text className="title2" fontWeight='bold'>Consuming PokeApi<br /> Resources</Text>
                    </Box>
                    <Box>
                        <Image
                            width='500px'
                            src="https://avatars.githubusercontent.com/u/64151210?v=4"
                            alt="PokeApi"
                        />
                    </Box>
                </Flex>
            </Box>
        </motion.div>
    )
}
