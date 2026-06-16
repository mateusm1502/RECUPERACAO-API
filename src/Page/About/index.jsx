import { Link } from 'react-router-dom'
import './style.css'

function About() {
    return (
        <>
            <h2>Sobre o projeto:</h2>
            <p>Foram utilizados React, Html e Css.</p>

            <Link to="/">
                <button>Navegar para Home</button>
            </Link>
        </>
    )
}
export default About