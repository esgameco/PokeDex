import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = "http://localhost:5000/"

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState({})
  const [stuff, setStuff] = useState([])

  useEffect(() => {
    
    fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(Response => Response.json())
    .then(res => console.log)
    .catch(err => setError(err))
  }, [])
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Stuff</h1>
      <div>
        <b>Stuffer</b>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
