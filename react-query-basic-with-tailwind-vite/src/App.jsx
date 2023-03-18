import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className="text-3xl font-bold text-red-500 underline text-center"> Hello World</p>
    </div>
  )
}

export default App
