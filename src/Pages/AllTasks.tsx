import React, { useContext } from "react"
import "../Styles/AllTasks.css"
import { DataBaseContext } from "../Context/DataBaseContext"
import TaskSquare from "../Components/TaskSquare";

function AllTasks(): React.JSX.Element {

  const { board, setBoard } = useContext(DataBaseContext);

  return (
    <div className="allTasks">
      {
        board.map((e)=>{
          return (
            <TaskSquare id={e.id} title={e.title} state={e.state} date={e.date} priority={e.priority} description={e.description} />
          )
        })
      }
    </div>
  )
}

export default AllTasks