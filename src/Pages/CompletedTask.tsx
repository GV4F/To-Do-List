import React, { useContext } from "react"
import TaskSquare from "../Components/TaskSquare";
import { DataBaseContext } from "../Context/DataBaseContext";
import "../Styles/CompletedTask.css"


function CompletedTask(): React.JSX.Element {

  const { board } = useContext(DataBaseContext);

  const filterBoard = ()=>{ return board.filter((e)=> e.state === true); }
  
  return (
    <div className="completedTask">
      <div className="completedTask_header"> <h1>Completed Tasks</h1> </div>
      <div className="completedTask_body">
      {
        filterBoard().map((e)=>{
          return (
            <TaskSquare id={e.id} title={e.title} state={e.state} date={e.date} priority={e.priority} description={e.description} />
          )
        })
      }
      </div>
    </div>
  )
}

export default CompletedTask;