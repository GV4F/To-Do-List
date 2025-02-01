import React, { createContext, SetStateAction, useState } from "react";

interface SearchContextInterface {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextInterface>({
  search: "",
  setSearch: ()=>{}
});

function SearchContextProvider({ children }:{ children: React.ReactNode }) {

  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch  }}>{ children }</SearchContext.Provider>
  )
}

export default SearchContextProvider;