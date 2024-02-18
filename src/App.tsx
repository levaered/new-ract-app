import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Volodymyr Sergeev")

  return (
    <>
      <img className='img' src="https://images.unsplash.com/photo-1707850975372-f0e6c12274e4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{name}</h1>
    </>
  )
}

export default App