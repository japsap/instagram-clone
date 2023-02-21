import React from 'react'
import { Route, Routes } from 'react-router'
import Loger from './Routes/Loger';

import useFetch from './Hooks/useFetch';

const App = () => {

  const [ data ] = useFetch('http://localhost:5000/login', {});

  console.log(data);

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Loger/>}/>
      </Routes>
    </div>  
  )
}

export default App