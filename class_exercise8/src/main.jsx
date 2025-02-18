import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App /> {/* can wrap App or other high-level parent components */}
  </ErrorBoundary>
)
