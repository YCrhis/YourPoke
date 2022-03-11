import { useEffect } from "react"
import { Banner } from "../components/Banner"

export const Home = () => {

    window.localStorage.setItem('hola', JSON.stringify({ name: 'crhis' }))

    useEffect(() => {
        window.location.reload()
    }, [])


    return (
        <div>
            <Banner />
        </div>
    )
}
