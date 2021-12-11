const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const getFirstPage = async () => {
  try {
    const response = await fetch(`${baseUrl}?offset=0`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}

const getPokemon = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}/`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const pokemonService = { getFirstPage, getPokemon }

export default pokemonService
