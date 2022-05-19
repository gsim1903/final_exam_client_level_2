import React from 'react'
import './app.css'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <h1 data-cy="header" align="center">
        {' '}
        COURSE LIST
      </h1>
      <Navbar />
    </>
  )
}

export default App
