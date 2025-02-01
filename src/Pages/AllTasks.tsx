import React, { useContext, useState } from "react"
import "../Styles/AllTasks.css"
import { DataBaseContext } from "../Context/DataBaseContext"
import TaskSquare from "../Components/TaskSquare";
// import { compareDesc } from "date-fns";
import AddModal from "../Components/AddModal";
import { IoIosAdd } from "react-icons/io";

function AllTasks(): React.JSX.Element {

  const [activeModal, setActiveModal] = useState(false);
  const { board } = useContext(DataBaseContext);
  
  return (
    <>
      <div className="allTasks">
        <h1>Board Tasks</h1>
        <div className="allTask_board">
          <div className="allTask_addTask" onClick={()=> {
            setActiveModal(true);
          }}><IoIosAdd /></div>
          {
            board.map((e)=>{
              return (
                <TaskSquare id={e.id} title={e.title} state={e.state} date={e.date} priority={e.priority} description={e.description} />
              )
            })
          }
        </div>
      </div>
      <AddModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </>
  )
}

export default AllTasks