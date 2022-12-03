import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
 const yoyo = data.map(item => {
  return <Card 
  key = {item.id}
  item = {item}
  />
 })
function App() {

  return (
    <div className="app">
    <Navbar/>
    {yoyo}
   
    
    </div>
  )
}

export default App
