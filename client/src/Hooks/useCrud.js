const url_postLogin_user = "http://localhost:5000/login";
const url_postRegister_user = "http://localhost:5000/register";
const url_postPhoto = "http://localhost:5000/create-post";
const url_photoLike = "http://localhost:5000/like";

const useCrud = () => {

     const headers = {
        'Accept': 'application/json',
        'Content-type' : 'application/json'
    }

  const postLoginUser = async (username, password) => {

    await fetch(url_postLogin_user, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, password }),

    })
    .then((res) => res.json());

  }


  const postRegisterUser = async (username, email, password) => {
   await fetch(url_postRegister_user, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ username, email, password }),
    })
    .then((res) => res.json())
  }


  const postPost = (image, description, ownerName ,owner, likes) => {
    return fetch(url_postPhoto, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ image, description, ownerName ,owner, likes }),
    }).then(res => res.json());
  }

  const updateLike = (likes, _id) => {
    return fetch(url_photoLike, {
      method: "POST",
        headers: headers,
        body: JSON.stringify({ likes, _id }),
    }).then((res) => res.json())
  }

  return {
    postLoginUser,
    postRegisterUser,
    postPost,
    updateLike
  };
};


export default useCrud;