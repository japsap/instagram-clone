import React from "react";
import useFetch from "../Hooks/useFetch";
import usePhotos from "../Hooks/usePhotos";
import Posts from "./InstagramPosts/Posts";
import Photo from "./Photo";

const Stories = () => {
  const [photos] = usePhotos();

  const [ posts ] = useFetch('http://localhost:5000/create-post');


  return (
    <div className="f-container">
      <div className="photos-container">
        {photos?.map((photo) => (
          <div key={photo.id} className="photos">
            <Photo {...photo} />
          </div>
        ))}
      </div>
      <div className="posts-container">
        {posts?.photos?.map((photo) => (
          <Posts key={photo._id} {...photo}/> 
        ))}
          
      </div>
    </div>
  );
};

export default Stories;
