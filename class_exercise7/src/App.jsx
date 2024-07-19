import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form, { LoginForm2 } from './Form'
import LoginForm from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm></LoginForm>
    </>
  )
}

export default App
