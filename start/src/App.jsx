import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './Random'
import Food from './food'
Food
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Food/>
     
    </>
  )
}

export default App
