import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom"
import { Application } from "../layout/App"
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home"
import { PokemonList } from "../pages/PokemonList";

export const Router = () => {

    let location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Application />}>
                    <Route index element={<Home />} />
                    <Route path='/pokemons' element={<PokemonList />}></Route>
                    <Route path='/pokemons/favorites' element={<Favorites />}></Route>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}
