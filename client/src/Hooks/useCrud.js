const url_postLogin_user = "http://localhost:5000/login";
const url_postRegister_user = "http://localhost:5000/register";
const url_postPhoto = "http://localhost:5000/create-post";

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


  const postPost = (image, description, owner) => {
    return fetch(url_postPhoto, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ image, description, owner }),
    }).then(res => res.json());
  }

  return {
    postLoginUser,
    postRegisterUser,
    postPost
  };
};


export default useCrud;