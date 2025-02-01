import React, { useContext, useState } from "react"
import { format } from "date-fns";
import { TaskInterface } from "../Context/DataBaseContext.model";
import { TaskClass } from "./TaskClass";
import EditModal from "./EditModal";
import "../Styles/Task.css"

import { FaCheck } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { IoIosFlag } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";
import { BsPencil } from "react-icons/bs";
import { DataBaseContext } from "../Context/DataBaseContext";

function Task({
  id, title, state, priority, date
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

  const setColorFlag = ()=>{
    switch (priority) {
      case "Urgent": return "flag-urgent";
      case "Medium": return "flag-medium";
      case "Low": return "flag-low";
    }
  }
  
  return (
    <>
      <EditModal editModal={editModal} setEditModal={setEditModal} id={id} />
      <div className={`task ${state ? "completed" : ""}`} key={id}>
        <div className="task_main">
          <button className="task_main-btn task_btn" onClick={complete}><FaCheck/></button>
          <p className="task_main-title">{ title }</p>
        </div>

        <div className="task_info">
          <div className="task_date">
            <span className="task_date-icon"><TbCalendarClock /></span>
            <p className="task_date-title">{ format(date, "dd/MM/yyyy") }</p>
          </div>
          <div className="task_priority">
            <span className={`task_priority-icon ${setColorFlag()}`}><IoIosFlag /></span>
            <p className="task_priority-title">{ priority }</p>
          </div>
        </div>

        <div className="task_btns">
          <button className="task-btns-trash task_btn" onClick={deleteFunction}><LuTrash2 /></button>
          <button className="task-btns-edit task_btn" onClick={()=>{
            setEditModal(true);
          }}><BsPencil /></button>
        </div>
      </div>
    </>
  )
}

export default Task