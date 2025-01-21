import React, { useContext } from "react";
import "../Styles/Home.css";

// * COMPONENTES / CONTEXT
import { DataBaseContext } from "../Context/DataBaseContext";
import AddModal from "../Components/AddModal";
// import Task from "../Components/Task";
// * REACT ICONS
import { LuSettings2 } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";

function Home(): React.JSX.Element {

  const { board } = useContext(DataBaseContext);

  const initDateToday = ()=>{
    const month: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const date = new Date();
    const day = date.getDate()
    const monthStr = month[date.getMonth()];
    const year = date.getFullYear();

    return `${day}/${monthStr}/${year}`;
  }
  
  return ( 
    <>
      <div className="home">
        <div className="home_header">
          <h1 className="home_header-h1">{ initDateToday() }</h1>
          <div className="home_header-total">({ board.length })</div>
        </div>
        
        <div className="home_task-container"></div>

        <div className="home_buttons">
          <button className="home_button-add"><IoIosAdd /></button>
          <button className="home_button-settings"><LuSettings2 /></button>
        </div>
      </div>
      <AddModal />
    </>
  )
}

export default Home