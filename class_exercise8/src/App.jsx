import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ MoviesListKeys2 } from './MoviesListKeys.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoviesListKeys2></MoviesListKeys2>
    </>
  )
}

export default App
