import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authToken from "../constants/token";

const useGetPostById = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const getPost = async () => {

        try {
            const response = await fetch(`https://api.react-learning.ru/posts/${id}`, {
                headers: {
                authorization: `Bearer ${authToken}`,
                },
            });

            const post = await response.json();

            setPost(post);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPost();
    }, [id]);

    return { post, getPost };
};

export default useGetPostById;
