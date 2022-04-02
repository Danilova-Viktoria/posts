import authToken from "../constants/token";

const useTogglePostLike = () => {
  const togglePostLike = async (id, isLiked) => {
    try {
      await fetch(
        `https://api.react-learning.ru/posts/likes/${id}`,
        {
          method: isLiked ? "PUT" : "DELETE",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return togglePostLike;
};

export default useTogglePostLike;
