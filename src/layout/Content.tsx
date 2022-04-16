import { Box, Container } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

interface props {
    children: JSX.Element | JSX.Element[]
}

export const Content = ({ children }: props) => {
    return (
        <Box pt={['150px', '150px', '100px']}>
            <Container maxW='container.xl'>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}
