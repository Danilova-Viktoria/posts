import { useEffect, useState } from "react";
import authToken from "../constants/token";

const useGetPosts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {

        try {
            const response = await fetch("https://api.react-learning.ru/posts", {
                headers: {
                authorization: `Bearer ${authToken}`,
                },
            });

            const posts = await response.json();

            setPosts(posts);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return { posts, getPosts };
};

export default useGetPosts;
