import { useEffect, useState } from "react";
import useLoader from "./useLoader";

const useGetUserInfo = () => {
  const [user, setUser] = useState(null);
  const { loading, error, load } = useLoader("/users/me");

  const getUserInfo = async () => {
    const user = await load();

    setUser(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { user, loading, error };
};

export default useGetUserInfo;
