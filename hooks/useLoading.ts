import { useCallback, useState } from 'react';

type ReturnValues = {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  loadingChange: (func: () => unknown) => void;
  asyncLoadingChange: <T>(func: () => Promise<T>) => T;
};

const useLoading = (): ReturnValues => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  const loadingChange = useCallback((callback: () => unknown) => {
    showLoader();
    const data = callback();
    hideLoader();
    return data;
  }, []);

  const asyncLoadingChange = useCallback(
    async (callback: () => Promise<unknown>) => {
      showLoader();
      try {
        const result = await callback();
        hideLoader();
        return result || true;
      } catch (error) {
        hideLoader();
      }
    },
    []
  );

  return {
    isLoading,
    showLoader,
    hideLoader,
    loadingChange,
    asyncLoadingChange,
  };
};

export default useLoading;
