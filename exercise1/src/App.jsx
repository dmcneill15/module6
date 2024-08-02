import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './greeting'

/*
function App() {
  const [count, setCount] = useState(0)

  //first greeting uses John andno childeren
  //second greeting tests children and no name
  return (
    <>
      <Greeting name="John"></Greeting>
      <Greeting>Its a lovely day! ☀</Greeting>  
    </>
  )
}

export default App
*/

//corrected code
function App() {
  const [count, setCount] = useState(0)

  //first greeting uses John andno childeren
  //second greeting tests children and no name
  return (
    <>
      <Greeting name="John">
        <p>Its a lovely day! ☀</p>   {/*Remember that a p element is a component. and now its a child within Greeting */}
      </Greeting>
    </>
  )
}

export default App
