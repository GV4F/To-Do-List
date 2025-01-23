import React, { Dispatch, SetStateAction, useState } from "react"
import "../Styles/EditModal.css"
// * ICONS
import { IoClose } from "react-icons/io5";

type TypeChange = "Title" | "Date" | "State" | "Options";

function EditModal(props:{ editModal: boolean, setEditModal: Dispatch<SetStateAction<boolean>> }): React.JSX.Element {

  const [typeChange, setTypeChange] = useState<TypeChange>("Options");
  const [modify, setModify] = useState<TypeChange>("Title");

  function isTypeChange(value: any): value is TypeChange {
    return value === "Title" || value === "Date" || value === "State";
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
          <input type="text" placeholder="New Title" />
          <button className="">Change</button>
        </form>

        <form className={`form_date ${typeChange == "Date" ? "" : "hidden"}`} onSubmit={(e)=> e.preventDefault()}>
          <input type="date" />
          <button className="">Change</button>
        </form>

        <form className={`form_state ${typeChange == "State" ? "" : "hidden"}`} onSubmit={(e)=> e.preventDefault()}>
          <select name="" id="">
            <option value="true">Complete</option>
            <option value="false">Incomplete</option>
          </select>
          <button className="">Change</button>
        </form>

        <button className="editModal_close" onClick={()=>{
          props.setEditModal(false);
        }}><IoClose /></button>
      </div>
    </div>
  )
}

export default EditModal;