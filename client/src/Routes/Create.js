import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import useCrud from "../Hooks/useCrud";

const Create = () => {
  const [ image, setImage ] = useState("");
  const [ description, setDescription ] = useState("");

  const [ errorP, setErrorP ] = useState('')
  const [ errorD, setErrorD ] = useState('')

  const { postPost } = useCrud()

  const { currentUser } = getAuth();
  const { uid } = currentUser;

  const navigate = useNavigate();


  const onSubmit = async (e) => {
    e.preventDefault();

    if(image.length < 3){
        return setErrorP('Invalid image!')
    }

    if(description.length < 6){
        setErrorP('')
        return setErrorD('Short description!')
    }

   postPost({ image, description, ownerName: currentUser.email ,uid, likes : 0})
    window.location.reload();
  };


  return (
    <div className="create-image">
      <header className="create-header" style={{ backgroundImage: `url('${image}')` }}>
        {image ==''? <h1>No image</h1>: ''}
      </header>
      <form onSubmit={onSubmit} method="POST" className="create-form">
        <div className="create-input">
            
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Image</label>
        </div>
        <p className="error_msg">{errorP}</p>
        <div className="create-input">
            
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
        </textarea>
        <label>Description</label>
        </div>

        <p className="error_msg">{errorD}</p>

        <button type="submit">Post image</button>
      </form>
    </div>
  );
};

export default Create;
