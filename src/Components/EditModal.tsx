import React, { Dispatch, SetStateAction, useState, useContext } from "react"
import { TaskClass } from "./TaskClass";
import type { ValueToChange, NewValue } from "./TaskClass";
import { DataBaseContext } from "../Context/DataBaseContext";
import "../Styles/EditModal.css"
// * ICONS
import { IoClose } from "react-icons/io5";

type TypeChange = "Title" | "Date" | "State" | "Options";

function EditModal(props:{ editModal: boolean, setEditModal: Dispatch<SetStateAction<boolean>>, id: number }): React.JSX.Element {

  const { board, setBoard } = useContext(DataBaseContext);
  const [typeChange, setTypeChange] = useState<TypeChange>("Options");
  const [modify, setModify] = useState<TypeChange>("Title");
  const [newTitle, setNewTitle] = useState<string>("");
  const [newState, setNewState] = useState<string>("true");
  const [newDate, setNewDate] = useState<string>("");

  function isTypeChange(value: any): value is TypeChange {
    return value === "Title" || value === "Date" || value === "State";
  }

  const update = (newValue: NewValue, valueToChange: ValueToChange)=>{
    const boardUpdate = TaskClass.UpdateTask({id: props.id, board, newValue, valueToChange});
    setBoard(boardUpdate);
  }
  

  return (
    <div className={`editModal_container ${props.editModal ? "" : "hidden"}`}>
      <div className="editModal">
        <form className={`form_options ${typeChange == "Options" ? "" : "hidden"}`} onSubmit={(e)=> e.preventDefault()}>
          <label>
            <span>What do you want to modify?</span>
            <select name="" id="" value={modify} onChange={(e)=>{ 
              setModify(isTypeChange(e.target.value) ? e.target.value : "Title");
             }}>
              <option value="Title">Title</option>
              <option value="Date">Date</option>
              <option value="State">State</option>
            </select>
          </label>
          <button className="editModal_optionBtn" onClick={()=>{
            setTypeChange(modify);
          }}>Change</button>
        </form>

        <form className={`form_title ${typeChange == "Title" ? "" : "hidden"}`} onSubmit={(e)=> e.preventDefault()}>
          <input type="text" placeholder="New Title" value={newTitle} onChange={(e)=>{
            setNewTitle(e.target.value);
          }} />
          <button className="" onClick={()=>{
            update(newTitle, "Title");
            setTypeChange("Options");
          }}>Change</button>
        </form>

        <form className={`form_date ${typeChange == "Date" ? "" : "hidden"}`} onSubmit={(e)=> e.preventDefault()}>
          <input type="date" value={newDate} onChange={(e)=> setNewDate(e.target.value)} />
          <button className="" onClick={()=>{
            update(new Date(newDate), "Date");
            setTypeChange("Options");
          }}>Change</button>
        </form>

        <form className={`form_state ${typeChange == "State" ? "" : "hidden"}`} onSubmit={(e)=> e.preventDefault()}>
          <select name="" id="" value={newState} onChange={(e)=> setNewState(e.target.value)}>
            <option value="true">Complete</option>
            <option value="false">Incomplete</option>
          </select>
          <button className="" onClick={()=>{
            newState ? update(true, "State") : update(false, "State");
            setTypeChange("Options");
          }}>Change</button>
        </form>

        <button className="editModal_close" onClick={()=>{
          props.setEditModal(false);
        }}><IoClose /></button>
      </div>
    </div>
  )
}

export default EditModal;