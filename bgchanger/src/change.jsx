
import {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';

function App() {

    const [color, setColor] = useState('olive');

    function GreenClick(){
      setColor('green')
    }

    function PinkClick(){
      setColor('pink');
    }

  return (
    <>
        <div className="fixed w-full h-screen duration-200" 
        style={{backgroundColor : color}}>
          <button onClick={GreenClick}>Green</button><br></br>
          <button onClick={PinkClick}>Pink</button><br></br>
          {/* <button onClick={() => setColor('black')}>Black</button><br></br>
          <button onClick={() => setColor('blue')}>Blue</button> */}
        </div>
    </>
  )
}

export default App
