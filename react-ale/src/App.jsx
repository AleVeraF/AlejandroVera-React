import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <Navbar />
          <CartWidget/>
        </nav>
        <ItemListContainer greeting="Bienvenidos a la tienda de videojuegos PsFlixGame"/>
        <Footer />
      </div>
    </>
  )
}

export default App
