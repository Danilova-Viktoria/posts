import useLoader from "./useLoader";

const useDeletePost = (id) => {
  const { loading, error, load } = useLoader(`/posts/${id}`, {
    method: "DELETE",
  });

  const deletePost = async () => {
    return await load();
  };

  return { deletePost, error, loading };
};

export default useDeletePost;
