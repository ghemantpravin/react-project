import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(1);

  function AddValue(){
    setCounter(counter + 1);
  }

  function RemoveValue(){
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React With Vite</h1>

      <h2>Counter Value = {counter}</h2>

      <button onClick={()=>AddValue()}> Add Value {counter}</button><br></br>
      <button onClick={()=>RemoveValue()}>Decrease Value {counter}</button>
    </>
  )
}

export default App
