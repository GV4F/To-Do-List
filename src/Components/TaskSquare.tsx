import React from "react"
import { TaskInterface } from "../Context/DataBaseContext.model";

function TaskSquare({
  id, title, description, state, priority, date
}: TaskInterface): React.JSX.Element {
  return (

    <div className="task_square" key={ id }>
      <div className="task_square-header">
        <button className={`task_square-header--btn ${state ? "completed" : ""}`}>x</button>
        <h2>{ title }</h2>
      </div>
      <div className="task_square-body">
        <p className="task_square-body--description">{ description }</p>
      </div>
    </div>
  )
}

export default TaskSquare;