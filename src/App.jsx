import { useState } from 'react'
import Header from "./components/Header"
import MiningVisualization  from "./components/MiningVisualization.jsx"
import NFTMinerApp  from "./components/NFTMinerApp.jsx"
import NFTCollection  from "./components/NFTCollection.jsx"
import './App.css'

function App() {


  return (
    <>
    <Header/>
    <MiningVisualization/>
    <NFTMinerApp/>
    <NFTCollection/>
  

    </>
  )
}

export default App
