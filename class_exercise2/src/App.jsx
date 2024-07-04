import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Callout, FullName} from './FancyBox.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* render the Callout component with FullName as children*/}
      <Callout title="Nested React Component"
        message="Simple message with a fancy box applied via composition">
        <FullName first="Elon" last="Musk" />
      </Callout>

      <FullName first="Dan" last="The Man" />
    </>
  )
}

export default App
