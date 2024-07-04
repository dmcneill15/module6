import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting>Its a lovely day.</Greeting>
      <Greeting name="John"></Greeting>
    </>
  )
}

export default App
