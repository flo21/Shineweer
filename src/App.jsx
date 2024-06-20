import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from "./components/search"
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Search />
    </>
  )
}

export default App
