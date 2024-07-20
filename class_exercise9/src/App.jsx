import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './ErrorMessage'
import { ErrorBoundary } from 'react-error-boundary'
import ExplodingBomb from './ExplodingBomb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <ExplodingBomb></ExplodingBomb>
      </ErrorBoundary>
    </>
  )
}

export default App
