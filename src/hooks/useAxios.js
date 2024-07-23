import { useEffect, useState } from "react";

import axios from "axios";

const useAxios = (word = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const url = "data.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useAxios;
