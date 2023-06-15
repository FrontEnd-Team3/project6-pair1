import { createContext, useContext, useState } from "react";

export const useLoading = () => useContext(LoadingStore);

const LoadingStore = createContext();

const LoadingStoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingStore.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingStore.Provider>
  );
};

export default LoadingStoreProvider;
