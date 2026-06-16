import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return (
        <>
            <h2>Bem-vindo! ao meu mundo de Harry Potter.</h2>
            <p>Este projeto utiliza a API publica para informacoes dos personagens.</p>

            <Link to="/about">
                <button>Navegar para About</button>
            </Link>
        </>
    )
}
export default Home