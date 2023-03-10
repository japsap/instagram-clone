import React from 'react'
import { useParams } from 'react-router'
import useDetails from '../../Hooks/useDetails';
import useFetch from '../../Hooks/useFetch';

const Picture = () => {
    const { photoId } = useParams();

    const [ data ] = useDetails(photoId);

    console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default Picture