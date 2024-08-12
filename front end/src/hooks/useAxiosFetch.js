import { useState, useEffect } from "react";
import axios from "axios";

// define ower custom hook that will fetch data using a specified url and return isLoad,isError,data => this returns will be updated each time the url is updated and resented ,
// also if the functional component is unmount or the url is updated this request will eliminated and the returns will updated

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    setTimeout(() => {
      console.log("set time out before fetch  !");
      fetchData(dataUrl);
    }, 4000);

    const cleanUp = () => {
      console.log("in cleanup ");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export { useAxiosFetch };
