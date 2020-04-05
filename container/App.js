import React from 'react'
import './App.css'
import VariableFormatter from '../components/VariableFormatter/VariableFormatter'


const App = props =>{
  return(
    <div className={"container"}>
    <h1>Qlik Variable Formatter</h1>
    <VariableFormatter></VariableFormatter>
    </div>
  )
}

export default App;