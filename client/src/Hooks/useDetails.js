import { useEffect, useState } from "react";

const useDetails = (photoId) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/profile/${photoId}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return [ data ];
};


export default useDetails
