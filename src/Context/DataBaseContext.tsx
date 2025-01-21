import React, { createContext, useState } from "react"
import { TaskInterface } from "./DataBaseContext.model";


interface DataBaseContextInterface{
  board: TaskInterface[],
  addTask: (task: TaskInterface)=> void;
}

export const DataBaseContext = createContext<DataBaseContextInterface>({
  board: [],
  addTask: ()=> {}
});

function DataBaseContextProvider({ children }: { children: React.ReactNode}): React.JSX.Element {

  const [board, setBoard] = useState<TaskInterface[]>([]);
  const addTask = (task: TaskInterface): void =>{ setBoard([...board, task]); }
  
  return (
    <DataBaseContext.Provider value={{ board, addTask }}>{ children }</DataBaseContext.Provider>
  )
}

export default DataBaseContextProvider