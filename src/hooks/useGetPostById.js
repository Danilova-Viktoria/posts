import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLoader from "./useLoader";

const useGetPostById = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { loading, error, load } = useLoader(`/posts/${id}`);

  const getPost = async () => {
    const post = await load();

    setPost(post);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return { post, getPost, loading, error };
};

export default useGetPostById;
