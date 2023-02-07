import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/ItemCount'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './Components/CartContainer/CartContainer'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import './App.css'



function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={ <ItemListContainer saludo="esta es una greeting" /> } />
      <Route path='/categoria/:idCategoria' element={ <ItemListContainer saludo="esta es una greeting" /> } />
      <Route path='/detalle/:idProducto' element={ <ItemDetailContainer /> } />
      <Route path='/cart' element={ <CartContainer /> } /> 

      <Route path='*' element={ <Navigate to='/' /> } /> 
    </Routes>
    <ItemCount />
    </BrowserRouter>
  )
}

export default App
