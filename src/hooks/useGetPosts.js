import { useEffect, useState } from "react";
import useLoader from "./useLoader";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, load } = useLoader("/posts");

  const getPosts = async () => {  
    const posts = await load();

    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, getPosts, loading, error };
};

export default useGetPosts;
