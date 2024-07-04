import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BigCats } from './BigCats'
import './BigCats.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BigCats />
    </>
  )
}

export default App
