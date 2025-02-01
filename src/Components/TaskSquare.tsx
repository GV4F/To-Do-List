import React, { useContext, useState } from "react"
import "../Styles/TaskSquare.css"
import { TaskInterface } from "../Context/DataBaseContext.model";
import { format } from "date-fns";
import { TaskClass } from "./TaskClass";

import { LuTrash2 } from "react-icons/lu";
import { BsPencil } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { DataBaseContext } from "../Context/DataBaseContext";
import EditModal from "./EditModal";

function TaskSquare({
  id, title, description, state, priority, date
}: TaskInterface): React.JSX.Element {

  const { board, setBoard } = useContext(DataBaseContext);


  const deleteFunction = ()=>{
    const rta = TaskClass.DeleteTask({id, board});
    setBoard(rta);
  }
  const complete = ()=>{
    const updateBoard = TaskClass.CompleteTask({ id, newState: !state, board});
    setBoard(updateBoard);
  }

  const [editModal, setEditModal] = useState<boolean>(false);

  return (
    <>
      <EditModal editModal={editModal} setEditModal={setEditModal} id={id} />
      <div className={`task_square ${state ? "taskCompleted" : ""}`} key={ id }>

        <div className="task_square-header">
          <div className="task_square-header--left">
            <button className={`task_square-header--btn ${state ? "completed" : ""}`} onClick={complete}><FaCheck /></button>
            <h2>{ title }</h2>
          </div>

          <span>{ format(date, "dd/MM/yyyy") }</span>
        </div>

        <div className="task_square-body">
          <p className="task_square-body--description">{ description }</p>
          <div className="task_square-body--footer">
            <div className="task_square-body--footer---btn">
              <button onClick={deleteFunction}><LuTrash2 /></button>
              <button onClick={()=> setEditModal(true)}><BsPencil /></button>
            </div>
            <div className="task_square-body--footer---priority">{ priority }</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskSquare;