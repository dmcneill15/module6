import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MoodChanger, MoodChangerFunctions } from './MoodChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoodChangerFunctions></MoodChangerFunctions>
    </>
  )
}

export default App
