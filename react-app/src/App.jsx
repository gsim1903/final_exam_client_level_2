import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import CourseDisplay from './Components/Coursedisplay'
import Coursehome from './Components/Coursehome'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
      <h1 data-cy="header" align="center">
        {' '}
        COURSE LIST
      </h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coursehome />} />
        <Route path="/:course" element={<CourseDisplay />} />
      </Routes>
    </>
  )
}

export default App
