import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import World from "./pages/World";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar1 name="simran" />
      <Navbar1 name="sheetal" />
      <Navbar1 name="sheetal22" />

      <Routes>
        <Route path="/" element={<div>Home News</div>} />
        <Route path="/world" element={<World />} />
        <Route path="/politics" element={<div>Politics News</div>} />
        <Route path="/tech" element={<div>Tech News</div>} />
        <Route path="/sports" element={<div>Sports News</div>} />
      </Routes>
      </Router>
    

    </>
  )
}

export default App
