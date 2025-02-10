import React, { useContext } from "react"
import TaskSquare from "../Components/TaskSquare";
import { DataBaseContext } from "../Context/DataBaseContext";
import "../Styles/CompletedTask.css"

function IncompletedTask(): React.JSX.Element {

  const { board } = useContext(DataBaseContext);
  const filterBoard = ()=>{ return board.filter((e)=> e.state === false); }

  return (
    <div className="incompletedTask">
      <h1 className="incompletedTask_header">Incompleted Tasks</h1>
      <div className={`incompletedTask_board ${filterBoard().length == 0 ? "empty" : ""}`}>
        {
          filterBoard().length > 0 ? (
            filterBoard().map((e)=>{
              return (
                <TaskSquare id={e.id} title={e.title} state={e.state} date={e.date} priority={e.priority} description={e.description} />
              )
            })
          ) : (
            <div>All tasks are completed</div>
          )
        }
      </div>
    </div>
  )
}

export default IncompletedTask