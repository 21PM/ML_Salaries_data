import { useState } from 'react'
import BasicTable from './Components/BasicTable'
import CsvToJson from './Components/CsvToJson'
import NewTable from './Components/NewTable'
import Expandable from "./Components/Expandable"
import JobsLineChart from "./Components/JobsLineChart"
import LayoutPattern from './Components/LayoutPattern'
import Chatbot from './ChatBot'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
        <LayoutPattern/>
    </>
  )
}

export default App
