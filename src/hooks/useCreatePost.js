import useLoader from "./useLoader";

const useCreatePost = () => {
  const { loading, error, load } = useLoader(`/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  const createPost = async (data) => {
    const tags =
      data.tags
        ?.split(",")
        .map((t) => t.trim())
        .filter((t) => t) || [];

    const image =
      data.image || "https://dummyimage.com/400x200/000/666666&text=NEW+POST";

    return await load({
      body: JSON.stringify({
        title: data.title,
        text: data.text,
        image,
        tags,
      }),
    });
  };

  return { createPost, error, loading };
};

export default useCreatePost;
