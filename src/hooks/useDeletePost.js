import authToken from "../constants/token";

const useDeletePost = () => {
  const deletePost = async (id) => {
    try {
      await fetch(
        `https://api.react-learning.ru/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return deletePost;
};

export default useDeletePost;
