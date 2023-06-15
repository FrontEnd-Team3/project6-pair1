import { createContext, useContext, useState } from "react";

export const useOneIssue = () => useContext(OneIssueStore);

const OneIssueStore = createContext();

const OneIssueStoreProvider = ({ children }) => {
  const [oneIssue, setOneIssue] = useState({});

  return (
    <OneIssueStore.Provider value={{ oneIssue, setOneIssue }}>
      {children}
    </OneIssueStore.Provider>
  );
};

export default OneIssueStoreProvider;
