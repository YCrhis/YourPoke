import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import { paginationAnimation, transition } from '../animations';

interface props {
    setPage: (params: any) => void;
    page: number;
    totalPage: number;
    nextPage: (params: any) => void;
    previusPage: (params: any) => void;
}

export const Pagination = ({ totalPage, nextPage, previusPage, page }: props) => {

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition={transition}
            variants={paginationAnimation}
        >
            <Box w={['100%', '80%', '50%']} display="flex" alignItems="center" justifyContent='space-around' m="auto" mb="70px" mt="40px">
                <Button
                    leftIcon={<ArrowBackIcon />}
                    onClick={nextPage}
                    colorScheme='teal'
                    variant='link'
                >
                    Back Page
                </Button>
                {page} de {totalPage}
                <Button
                    onClick={previusPage}
                    colorScheme='teal'
                    variant='link'
                    rightIcon={<ArrowForwardIcon />}
                >Next Page
                </Button>
            </Box>
        </motion.div>
    )
}
