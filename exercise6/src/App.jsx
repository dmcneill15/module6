import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calculator } from './Calculator'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './ErrorMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorMessage} onReset={()=>{}}>
        <Calculator></Calculator>
      </ErrorBoundary>
    </>
  )
}

export default App


//To get error handling correct - need to setup Error Boundary in App.jsx & calculator.jsx
//Can include onReset to reset any states of the calculator if needed when Try Again button is clicked