import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form, { LoginForm2 } from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm2></LoginForm2>
    </>
  )
}

export default App
