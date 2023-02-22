import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import authUser from './Hooks/useAuth';

//components
import Loger from './Routes/Loger';
import Profile from './Routes/MainPage';
import Navbar from './Components/Navbar';

const App = () => {

  const [ user ] = authUser();


  return (
    <div className='app-container'>
      <Routes>
        {user ? <Route path='/' element={<Profile user={user}/>}/> :  <Route path='/' element={<Loger/>}/>} 
        <Route path='/profile' element={<Profile/>}/>     
      </Routes>
    </div>  
  )
}

export default App