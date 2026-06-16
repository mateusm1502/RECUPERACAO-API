const URL_BASE = 'https://hp-api.onrender.com/api'

export async function getCharacters() {
    
    const response = await fetch('https://hp-api.onrender.com/api/characters')
    if (!response.ok) {
        throw new Error('Deu ruim')
    }
    const data = await response.json()
    console.log(data)
    return data
}