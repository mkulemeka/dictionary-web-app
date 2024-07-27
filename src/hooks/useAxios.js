import { useCallback, useEffect, useState } from "react";

import axios from "axios";

const useAxios = (word = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetch data from the Dictionary API. If the word is empty, set loading to false and return. Otherwise, make a request to the API and set the data, loading, and error states accordingly.
   * @returns {Promise<void>}
   * @param {string} word
   */
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
      setError(error?.response?.data);
      setLoading(false);
    }
  }, [word]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useAxios;
