import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Home from './components/Home'
import Read from './components/Read'
import Update from './components/Update'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/update/:id' element={<Update></Update>}></Route>
            <Route path='/read/:id' element={<Read></Read>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
