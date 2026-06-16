import { BrowserRouter , RouteS, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'

import About from './Page/About'
import Home from './Page/Home'
import Pagina1 from './Page/Pagina1'
import './App.css'
import Pagina2 from './Page/Pagina2'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
    </>
  )
}

export default App
