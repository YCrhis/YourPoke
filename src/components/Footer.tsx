import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { bannerAnimation, transition } from "../animations"

export const Footer = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={bannerAnimation}
            key="card"
        >
            <Box p="10" textAlign="center">
                <Text color="gray">
                    Web page made by Yeridi Crhis &copy; 2022
                </Text>
            </Box>
        </motion.div>
    )
}
