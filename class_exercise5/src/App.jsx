import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BirthdayTranslator, BirthdayTranslatorNeater, BirthdayTranslatorDynamicButtons} from './BirthdayTranslator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BirthdayTranslatorDynamicButtons></BirthdayTranslatorDynamicButtons>
    </>
  )
}

export default App
