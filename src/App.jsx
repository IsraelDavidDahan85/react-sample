import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <>
        <h1> This is get from Backend</h1>
        <div className="card">
        <p>{data.msg}</p>
      </div>
    </>
  )
}

export default App
