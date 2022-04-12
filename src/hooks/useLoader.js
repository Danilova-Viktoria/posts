import { useState } from "react";
import authToken from "../constants/token";

const useLoader = (url, params = {}, shouldReceiveResponse = true) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const load = async (extraParams = {}) => {
    setError(false);
    setLoading(true);

    try {
      const response = await fetch(`https://api.react-learning.ru${url}`, {
        ...params,
        ...extraParams,
        headers: {
          authorization: `Bearer ${authToken}`,
          ...params?.headers,
          ...extraParams?.headers,
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (shouldReceiveResponse && data.err) {
            throw new Error(`[Loader error] ${JSON.stringify(data.message)}`);
        }

        return data;
      }

      throw new Error(`[Loader error]: ${response.status}`);
    } catch (e) {
      console.log(e);
      setError(true);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    load,
  };
};

export default useLoader;
