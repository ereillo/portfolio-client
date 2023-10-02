import Navbar from "../components/Navbar.jsx"
import Landing from './pages/Landing.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Tv from './pages/Tv.jsx'
import Articulos from './pages/Articulos.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div style = {{backgroundColor: "#bdd9f2", width: "100%"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/portfolio/proyects" element={<Proyectos />} />
        <Route path="/portfolio/tv" element={<Tv/>} />
        <Route path="/portfolio/articles" element={<Articulos />} />
      </Routes>
    </div>
  )
}

export default App;