import React from 'react'
const Photo = ({ src, photographer }) => {

  return (
    <div className='images-container'>  
        <img src={src.tiny} className='image'/>
        <p>{photographer}</p>
    </div>
  )
}

export default Photo