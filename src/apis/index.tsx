let url = "https://pokeapi.co/api/v2/"

export const searchPokemon = async (pokemon: string) => {
    try {
        const response = await fetch(`${url}pokemon/${pokemon}`);
        const data = response.json();
        return data;

    } catch (error: any) {
        console.log(error.message)
    }
}

export const getPokemon = async (limit = 25, offset = 0) => {
    try {
        const response = await fetch(`${url}pokemon?limit=${limit}&offset=${offset}`);
        const data = response.json();
        return data;

    } catch (e) {
        console.log(e)
    }
}


export const getPokemonData = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;

    } catch (e) {
        console.log(e)
    }
}