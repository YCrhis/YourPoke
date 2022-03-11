import { Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { bannerAnimation, transition } from "../animations"

export const NoPoke = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={bannerAnimation}
        >
            <Text fontSize="2xl" textAlign="center" color="purple.500">You don't have any favorite pokemon :(</Text>
            <Image
                borderRadius='50%'
                m='auto'
                width='200px'
                mt="30px"
                src="https://c.tenor.com/XuxCCtkGD10AAAAC/cat-rainbow.gif"
            />
        </motion.div>
    )
}
