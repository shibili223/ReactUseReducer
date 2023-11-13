import { useState } from 'react'
import './App.css'
import Dashboard from "./Component/Dashboard/Dashboard"
import DashboardContext from './Context/DashboardContext'
import "./index.css"



function App() {


  return (
    <>
    <DashboardContext>
       <Dashboard>
   
       </Dashboard>

    </DashboardContext>
      

    </>
  )
}

export default App
