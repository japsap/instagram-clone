import { getAuth } from "firebase/auth";
import React, { useState } from "react";

import { AiOutlineHeart, AiOutlineSend, AiFillHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineBookmark } from "react-icons/hi";
import useCrud from "../../Hooks/useCrud";

const Posts = ({ image, description, uid, likes, _id, liked, ownerName }) => {
  const { currentUser } = getAuth();

  const uuid = currentUser?.uid;
  const uknown =
    "https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif";

  const [like, setLike] = useState(likes);

  const { updateLike } = useCrud();

  const likess = () => {
    updateLike({ likes: like + 1, _id, liked: uuid });
    window.location.reload();
  };

  const unlike = () => {
    updateLike({ likes: like - 1, _id, liked: ""});
    window.location.reload();
  };

  return (
    <div className="postsContainer">
      <div className="user-credentials">
        <img
          src={currentUser.photoURL == null ? uknown : currentUser.photoURL}
        />
        <span>
          {" "}
          {currentUser.displayName == null
            ? ownerName
            : currentUser.displayName}
        </span>
        <li>• 3 hours</li>
        {/* picture options */}

        {uid === uuid ? <BsThreeDots className="icon" /> : " "}
      </div>
      <img src={image} />
      <div className="posts-likes">
        {liked.includes(uuid) ? (
          <AiFillHeart className="icon red" onClick={unlike} />
        ) : (
          <AiOutlineHeart className="icon" onClick={likess} />
        )}

        <BiMessageRounded className="icon" />
        <AiOutlineSend className="icon" />

        <HiOutlineBookmark className="icon-2" />
      </div>
      <div className="likes-count">
        <p>
          <span>{likes}</span> likes
        </p>
      </div>
      <div className="post-info d-flex">
        <span>
          {currentUser.displayName == null
            ? ownerName
            : currentUser.displayName}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Posts;
