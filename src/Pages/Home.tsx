import React, { useContext, useState } from "react";
import { format } from "date-fns";
import "../Styles/Home.css";

// * COMPONENTES / CONTEXT
import { DataBaseContext } from "../Context/DataBaseContext";
import AddModal from "../Components/AddModal";
import Task from "../Components/Task";
// * REACT ICONS
import { LuSettings2 } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";

function Home(): React.JSX.Element {

  const [activeModal, setActiveModal] = useState(false);

  const { board } = useContext(DataBaseContext);
  
  return ( 
    <>
      <div className="home">
        <div className="home_header">
          <h1 className="home_header-h1">{ format(new Date(), "MMMM/dd/yyyy") }</h1>
          <div className="home_header-total">({ board.length })</div>
        </div>
        
        <div className="home_task-container">
          {
          board.map((e)=>{
            return (
              <Task id={e.id} title={e.title} state={e.state} priority={e.priority} date={e.date} />
            )
          })
          }
        </div>

        <div className="home_buttons">
          <button className="home_button-add" 
            onClick={()=>{ setActiveModal(!activeModal) }}><IoIosAdd />
          </button>
          <button className="home_button-settings"><LuSettings2 /></button>
        </div>
      </div>
      <AddModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </>
  )
}

export default Home