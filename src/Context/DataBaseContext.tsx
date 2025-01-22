import React, { createContext, SetStateAction, useState } from "react"
import { TaskInterface } from "./DataBaseContext.model";


interface DataBaseContextInterface{
  board: TaskInterface[],
  setBoard: React.Dispatch<SetStateAction<TaskInterface[]>>;
}

export const DataBaseContext = createContext<DataBaseContextInterface>({
  board: [],
  setBoard: ()=> {}
});

function DataBaseContextProvider({ children }: { children: React.ReactNode}): React.JSX.Element {

  const [board, setBoard] = useState<TaskInterface[]>([]);
  
  return (
    <DataBaseContext.Provider value={{ board, setBoard }}>{ children }</DataBaseContext.Provider>
  )
}

export default DataBaseContextProvider