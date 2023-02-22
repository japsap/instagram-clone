import React from "react";
import useFetch from "../Hooks/useFetch";
import usePhotos from "../Hooks/usePhotos";
import Photo from "./Photo";

const Stories = () => {
  const [ photos ] = usePhotos();
  
  return (
    <div className='photos-container'>
      {photos?.map((photo) => (
        <div key={photo.id} className='photos'>
            <Photo {...photo} />
        </div>
      ))}
    </div>
  );
};

export default Stories;
