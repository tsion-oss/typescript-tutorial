import { useState } from 'react'

import Adding from './components/adding.tsx'
// import './tailwind.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hey</h1>
      <Adding/>
    </>
  )
}

export default App
