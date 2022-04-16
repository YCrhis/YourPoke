import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

export const SwitchPage = () => {

    const { toggleColorMode } = useColorMode();

    return (
        <div>
            <IconButton
                onClick={toggleColorMode}
                colorScheme={useColorModeValue('purple', 'yellow')}
                aria-label='Call Sage'
                fontSize='20px'
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            />
        </div>
    )
}
