import { useEffect, useState } from "react"
import { getCharacters } from "../../api/harrypotter"

function Pagina1() {
    const [Characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters().then(setCharacters)
    }, [])

    return (
        <div>
            <h2>Personagens</h2>

            {Characters.slice(0, 20).map((Character, index) => (
                <div key={index}>
                    <img
                        src={Character.image}
                        alt={Character.name}
                        width={150}
                    />

                    <h3>{Character.name}</h3>
                    <p>Casa: {Character.house}</p>
                </div>
            ))}
        </div>
    )

}
export default Pagina1