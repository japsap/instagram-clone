import { getAuth } from "firebase/auth";
import { handleLogOut } from "../Hooks/firebase";

//react
import React from "react";
import Navbar from "../Components/Navbar";

//icons
import { BsGearWide } from "react-icons/bs";

//hooks
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router";

const Profile = () => {
  const { currentUser } = getAuth();
  const navigate = useNavigate();

  const uuid = currentUser?.uid;
  const [posts] = useFetch("http://localhost:5000/create-post");

  let filteredPosts = posts?.photos?.filter((post) => post.uid === uuid);

  console.log(posts?.photos);

  return (
    <div className="profile-container">
      <Navbar />

      <div className="profile">
        <div className="d-flex">
          <img
            src={
              currentUser?.photoURL == null
                ? "https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif"
                : currentUser?.photoURL
            }
          />
          <div className="profile-info">
            <div className="username">
              <p>
                {currentUser?.displayName == null
                  ? "Unknown"
                  : currentUser?.displayName}
              </p>
              <button onClick={() => navigate("/edit-profile")}>
                Edit profile
              </button>
              <button
                onClick={() => {
                  handleLogOut();
                  navigate("/");
                }}
              >
                Log out
              </button>
              <BsGearWide className="icon" />
            </div>
            <div className="posts">
              <p>{filteredPosts?.length} posts</p>
              <p>564 followers</p>
              <p>87 following</p>
            </div>
            <div className="bio">
              {/* <p>Alex :3 </p>
              <p>Уеб дизайнер</p>
              <p> 22</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="neshto-container">
        {filteredPosts?.map((post, index) => {
          return (
            <img
              src={post.image}
              key={index}
              onClick={() => navigate(`${post._id}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
