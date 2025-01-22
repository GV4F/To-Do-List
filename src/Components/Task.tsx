import React, { useContext } from "react"
import { format } from "date-fns";
import { TaskInterface } from "../Context/DataBaseContext.model";
import { TaskClass } from "./TaskClass";
import "../Styles/Task.css"

import { FaRegCheckCircle } from "react-icons/fa";
// import { MdOutlinePending } from "react-icons/md";
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
  
  return (
    <div className={`task ${state ? "completed" : ""}`} key={id}>
      <div className="task_main">
        <button className="task_main-btn task_btn" onClick={()=>{
        }}><FaRegCheckCircle/></button>
        <p className="task_main-title">{ title }</p>
      </div>

      <div className="task_info">
        <div className="task_date">
          <span className="task_date-icon"><TbCalendarClock /></span>
          <p className="task_date-title">{ format(date, "dd/mm/yyyy") }</p>
        </div>
        <div className="task_priority">
          <span className="task_priority-icon"><IoIosFlag /></span>
          <p className="task_priority-title">{ priority }</p>
        </div>
      </div>

      <div className="task_btns">
        <button className="task-btns-trash task_btn" onClick={deleteFunction}><LuTrash2 /></button>
        <button className="task-btns-edit task_btn"><BsPencil /></button>
      </div>
    </div>
  )
}

export default Task