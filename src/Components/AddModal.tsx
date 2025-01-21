import React from "react"
import "../Styles/AddModal.css"
import { TbCalendarClock } from "react-icons/tb";
import { IoIosFlag } from "react-icons/io";
import { IoClose } from "react-icons/io5";


function AddModal(): React.JSX.Element {
  return (
    <section className="addModal">

      <div className="modal">
        <form>
          <input type="text" placeholder="New Task" className="modal_input-task" />
          <div className="modal_form-info">
            <label>
              <span className="label_icon"><TbCalendarClock /></span>
              <input type="text" placeholder="12/01/2024"/>
            </label>

            <label>
              <span className="label_icon"><IoIosFlag/></span>
              <input type="text" placeholder="Urgent"/>
            </label>
          </div>
          <textarea name="description" id="description" placeholder="Add a new description" ></textarea>
        </form>
        <button className="modal_close"><IoClose /></button>
        <button className="modal_add">Add</button>
      </div>

    </section>
  )
}

export default AddModal;