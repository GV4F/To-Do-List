import React, { useState } from "react"
import "../Styles/Task.css"

import { FaRegCheckCircle } from "react-icons/fa";
// import { MdOutlinePending } from "react-icons/md";
import { TbCalendarClock } from "react-icons/tb";
import { IoIosFlag } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";
import { BsPencil } from "react-icons/bs";

function Task(): React.JSX.Element {

  const [completed, setCompleted] = useState(false);

  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <div className="task_main">
        <button className="task_main-btn task_btn" onClick={()=>{
          setCompleted(!completed);
        }}><FaRegCheckCircle/></button>
        <p className="task_main-title">Tarea 1</p>
      </div>

      <div className="task_info">
        <div className="task_date">
          <span className="task_date-icon"><TbCalendarClock /></span>
          <p className="task_date-title">21/01/2025</p>
        </div>
        <div className="task_priority">
          <span className="task_priority-icon"><IoIosFlag /></span>
          <p className="task_priority-title">Urgent</p>
        </div>
      </div>

      <div className="task_btns">
        <button className="task-btns-trash task_btn"><LuTrash2 /></button>
        <button className="task-btns-edit task_btn"><BsPencil /></button>
      </div>
    </div>
  )
}

export default Task