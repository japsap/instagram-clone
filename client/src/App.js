import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

//hooks
import useFetch from './Hooks/useFetch';

//components
import Loger from './Routes/Loger';
import Profile from './Routes/Profile';

//firebase comps
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Hooks/firebase';


const App = () => {

  const [ user, setUser ] = useState();

  const authListener = () => {
    onAuthStateChanged(auth, user => {
      if(user){
        return setUser(user)
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])


  return (
    <div className='app-container'>
      <Routes>
        {user ? <Route path='/' element={<Profile user={user}/>}/> :  <Route path='/' element={<Loger/>}/>}       
      </Routes>
    </div>  
  )
}

export default App