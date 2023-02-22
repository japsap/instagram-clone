import React from 'react'
import Navbar from '../Components/Navbar';
import Stories from '../Components/Stories';
import Suggestions from '../Components/Suggestions';

const MainPage = () => {
  return (
    <div className='profile-container'>
      <Navbar/>
      <div className='fyp-container'>
        <Stories/>  
        <Suggestions/>
      </div>
    </div>
  )
}

export default MainPage