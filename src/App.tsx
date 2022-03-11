import { BrowserRouter } from 'react-router-dom'
import PokeProvider from './context/PokeProvider'
import { Router } from './routes'

function App() {

  return (
    <PokeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PokeProvider>
  )
}

export default App
