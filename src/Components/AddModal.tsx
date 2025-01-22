import React, { Dispatch, SetStateAction, useState, useContext } from "react"
import { TaskClass } from "./TaskClass";
import "../Styles/AddModal.css"
import { TbCalendarClock } from "react-icons/tb";
import { IoIosFlag } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { DataBaseContext } from "../Context/DataBaseContext";


function AddModal(props: { activeModal: boolean, setActiveModal: Dispatch<SetStateAction<boolean>> }): React.JSX.Element {

  const { board, setBoard } = useContext(DataBaseContext);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const resetValues = ()=>{
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("");
  }
  const add = ()=>{
    const newTask = TaskClass.CreateTask({ title, state: false, date: new Date(date), priority, description: description});
    setBoard([...board, newTask]);
    resetValues();
  }
  

  return (
    <section className={`addModal ${ props.activeModal ? "" : "hidden" }`}>

      <div className="modal">
        <form onSubmit={(e)=> {
          e.preventDefault();
        }}>
          <input required type="text" placeholder="New Task" className="modal_input-task" value={title} onChange={(e)=> {
            setTitle(e.target.value);
          }} />
          <div className="modal_form-info">
            <label>
              <span className="label_icon"><TbCalendarClock /></span>
              <input required type="date" name="inputData" id="inputData" value={date} onChange={(e)=> {
                setDate(e.target.value);
              }} />
            </label>

            <label>
              <span className="label_icon"><IoIosFlag/></span>
              <select required name="priority" id="priority" value={priority} onChange={(e)=> {
                setPriority(e.target.value);
                console.log(priority);
              }}>
                <option value="Urgent">Urgent</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <textarea name="description" id="description" placeholder="Add a new description" value={description} onChange={(e)=> {
            setDescription(e.target.value);
          }} ></textarea>
          <button className="modal_add" onClick={add}>Add</button>
        </form>
        <button className="modal_close" onClick={()=>{
          props.setActiveModal(false);
        }}><IoClose /></button>
      </div>

    </section>
  )
}

export default AddModal;