import React from 'react'
import { Route, Routes } from 'react-router'
import Loger from './Routes/Loger'

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Loger/>}/>
      </Routes>
    </div>  
  )
}

export default App