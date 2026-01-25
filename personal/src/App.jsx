import Navbar from "./sections/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Asosiy from "./sections/asosiy/asosiy";
import Haqimda from "./sections/men_haqimda/haqimda";
import Loyiha from "./sections/loyihalar/loyiha";
import Boglanish from "./sections/boglanish/boglanish";
import './App.css'
import { navLinks } from "./constants";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={navLinks.id} element={<Asosiy />} />
        <Route path={navLinks.id} element={<Haqimda />} />
        <Route path={navLinks.id} element={<Loyiha />} />
        <Route path={navLinks.id} element={<Boglanish />} />

      </Routes>
    </>
  )
}

export default App
