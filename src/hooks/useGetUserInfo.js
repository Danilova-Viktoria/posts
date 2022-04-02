import { useEffect, useState } from "react";
import authToken from "../constants/token";

const useGetUserInfo = () => {
    const [user, setUser] = useState(null);

    const getUserInfo = async () => {

        try {
            const response = await fetch("https://api.react-learning.ru/users/me", {
                headers: {
                authorization: `Bearer ${authToken}`,
                },
            });

            const user = await response.json();

            setUser(user);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return user;
};

export default useGetUserInfo;
