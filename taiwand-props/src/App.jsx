import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {

  return (
    <>
      <Card username="Johnny" btn='More Info'/>
      <br />
      <Card username="Depp" btn='Click Here'/>
    </>
  )
}

export default App
