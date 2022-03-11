import { Image, Text } from "@chakra-ui/react"

export const NoPoke = () => {
    return (
        <div>
            <Text fontSize="2xl" textAlign="center" color="purple.500">You don't have any favorite pokemon :(</Text>
            <Image
                borderRadius='50%'
                m='auto'
                width='200px'
                mt="30px"
                src="https://c.tenor.com/XuxCCtkGD10AAAAC/cat-rainbow.gif"
            />
        </div>
    )
}
