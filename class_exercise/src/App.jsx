import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ComplexComment, Comment} from './complexComment.jsx'

function App() {
  const [count, setCount] = useState(0)

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { // author is also an object
      name: 'Hello World',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <>
      {/* render the component, passing object data as props */}
      <Comment author={comment.author}
        date={comment.date}
        text={comment.text} />
    </>
  )
}

export default App
