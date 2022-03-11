import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import PokeProvider from './context/PokeProvider'

ReactDOM.render(
  <React.StrictMode>
    <PokeProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PokeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
