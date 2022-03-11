import { Box, Container, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { bannerAnimation, transition } from "../animations";

interface props {
    children: JSX.Element | JSX.Element[]
}

export const Content = ({ children }: props) => {
    return (
        <Box pt={['200px', '200px', '100px']}>
            <Container maxW='container.xl'>
                {children}
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
            </Container>
        </Box>
    )
}
