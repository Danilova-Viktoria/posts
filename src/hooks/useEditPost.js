import useLoader from "./useLoader";

const useEditPost = (id) => {
  const { loading, error, load } = useLoader(`/posts/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  const editPost = async (data) => {
    const tags = data.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);

    return await load({
      body: JSON.stringify({
        ...data,
        tags,
      }),
    });
  };

  return { editPost, error, loading };
};

export default useEditPost;
