import React from 'react'
import { Route, Routes } from 'react-router'
import authUser from './Hooks/useAuth';

//components
import Loger from './Routes/Loger';
import MainPage from './Routes/MainPage';
import Create from './Routes/Create';
import Profile from './Routes/Profile';
import EditProfile from './Routes/EditProfile';
import Picture from './Components/InstagramPosts/Picture';

const App = () => {

  const [ user ] = authUser();

  return (
    <div className='app-container'>
      <Routes>
        {user ? <Route path='/' element={<MainPage user={user}/>}/> :  <Route path='/' element={<Loger/>}/>}
        {user ? <Route path='/profile' element={<Profile/>}/> :  <Route path='/profile' element={<Loger/>}/>} 
        {user ? <Route path='/create' element={<Create/>}/> :  <Route path='/create' element={<Loger/>}/>}   
        {user ? <Route path='/edit-profile' element={<EditProfile/>}/> :  <Route path='/edit-profile' element={<Loger/>}/>}
        {user ? <Route path='/profile/:photoId' element={<Picture/>}/> :  <Route path='/profile/:photoId' element={<Loger/>}/>}    
      </Routes>
    </div>  
  )
}

export default App