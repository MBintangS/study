import { useEffect, useState } from "react";

const noop = () => {};
const defaultConfig = {
  onSuccess: noop,
  onError: noop,
  autoFetch: true,
  needToken: false,
};

const useQuery = (fn, config = defaultConfig, getIdToken, ...params) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: "",
  });
  const { onSuccess, onError, autoFetch, needToken } = config;
  const maxRetries = 3;
  let retryCount = 0;

  const runQuery = async (...params) => {
    if (!fn) return;

    setState((s) => ({ ...s, isLoading: true }));
    try {
      const { data, status } = await fn(...params);
      if (status !== 200) {
        handleNon200Response(data);
        return;
      }
      setState({
        data: data,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      });
      onSuccess && onSuccess(data);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const runQueryWithToken = async (...params) => {
    if (!needToken || !fn) return;

    setState((s) => ({ ...s, isLoading: true }));
    try {
      const token = await getIdToken();
      const { data, status } = await fn(token, ...params);
      if (status !== 200) {
        handleNon200Response(data);
        return;
      }
      setState({
        data: data,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      });
      onSuccess && onSuccess(data);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const handleNon200Response = (data) => {
    retryCount++;
    if (retryCount < maxRetries) {
      retryQuery();
    } else {
      setState({
        data: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: "Terjadi Kesalahan",
      });
      onError && onError(data);
    }
  };

  const handleFetchError = (error) => {
    retryCount++;
    if (retryCount < maxRetries) {
      retryQuery();
    } else {
      setState({
        data: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: "Terjadi Kesalahan",
      });
      onError && onError(error);
    }
  };

  const retryQuery = () => {
    if (needToken) {
      runQueryWithToken(...params);
    } else {
      runQuery(...params);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      if (needToken) {
        runQueryWithToken(...params);
      } else {
        runQuery(...params);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
    refetch: runQuery,
    refetchWithToken: runQueryWithToken,
  };
};

export default useQuery;
