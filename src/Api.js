import React, { useEffect } from "react";
import axios from "axios";
const Api = ({ posts, setPosts }) => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setPosts(data.data))
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};
export default Api;
