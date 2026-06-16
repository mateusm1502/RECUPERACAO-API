import { useEffect, useState } from "react"
import { getCharacters } from "../../api/harrypotter"

function Pagina2() {
    const [Characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getCharacters().then(setCharacters)
    }, [])

    const filtered = Characters.filter((Character) => 
   
        Character.name.tolowerCase().includes(search.tolowerCase())
    )

    return (
        <div>
            <h2>Pesquisar Personagem</h2>

            <input 
            type="text"
            placeholder="Digite um nome"
            value={search}
            onChange={(e) => 
                setSearch(e.target.value)} 
            />

            {filtered.map((Character, index) => ( 
                <p key={index}>{Character.name}</p>
            ))}
        </div>
    )


}
export default Pagina2