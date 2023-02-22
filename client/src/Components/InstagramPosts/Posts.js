import React from "react";

const Posts = () => {
  return (
    <div className="postsContainer">
        <div className="user-credentials">
            <h1>username</h1>
            <li>3 hours</li>
            {/* picture options */}
        </div>
      <img src="https://media.istockphoto.com/id/1182393363/photo/alexander-nevsky-cathedral-in-sofia-bulgaria-taken-in-may-2019-taken-in-hdr.jpg?s=612x612&w=0&k=20&c=pxdKXGCg5wnU1cpK-0em0FAISx0aV5o18l2FaU5u94M=" />
        <div className="posts-likes">
            {/* comments, likes, shares */}
        </div>
        <div className="likes-count">
            {/* likes count */}
        </div>
        <div className="post-info">
            {/* username + description */}
        </div>
    </div>
  );
};

export default Posts;
