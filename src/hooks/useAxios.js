import { useCallback, useEffect, useState } from "react";

import axios from "axios";

const useAxios = (word = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const url = "data.json";

  const fetchData = useCallback(async () => {
    try {
      if (!word) {
        setLoading(false);
        return;
      }

      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.response.data);
      setLoading(false);
    }
  }, [word]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return { data, loading, error };
};

export default useAxios;
