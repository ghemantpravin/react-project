import { useState } from 'React'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
        <h1>Context API</h1>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
