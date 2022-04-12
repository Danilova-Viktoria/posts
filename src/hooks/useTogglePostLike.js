import useLoader from "./useLoader";

const useTogglePostLike = (id) => {

  const { loading, error, load } = useLoader(`/posts/likes/${id}`);

  const togglePostLike = async (isLiked) => {
      await load({ method: isLiked ? "PUT" : "DELETE" });
  };

  return { togglePostLike, error, loading };
};

export default useTogglePostLike;
