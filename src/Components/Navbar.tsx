import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
// * ICONOS
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { NavbarDisplayContext } from "../Context/NavbarDisplayContext";


function Navbar(): React.JSX.Element {

  const { active, setActive } = useContext(NavbarDisplayContext);

  const [value, setValue] = useState<string>("");

  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      <div className="navbar_header">
        <button className="navbar_header-icon" onClick={()=> {
          setActive(!active);
        }}><MdOutlineMenu /></button>
        <p className="navbar_header-title">Menu</p>
      </div>

      <div className="navbar_search">
        <form onSubmit={(e)=> e.preventDefault()}>
          <button className="navbar_search-btn"><IoSearch /></button>
          <input type="text" placeholder="Search" className="navbar_search-input" value={value}
          onChange={(e)=> {
            setValue(e.target.value);
          }}
          />
        </form>
      </div>

      <div className="navbar_buttons">
        <Link to="/">
          <div className="navbar_buttons-icon"><IoIosHome /></div>
          <div className="navbar_buttons-text">Home</div>
        </Link>
        <Link to="/tasks">
          <div className="navbar_buttons-icon"><FaTasks /></div>
          <div className="navbar_buttons-text">Tasks</div>
        </Link>
        <Link to="/tasks/completed">
          <div className="navbar_buttons-icon"><FaRegCheckCircle /></div>
          <div className="navbar_buttons-text">Completed</div>
        </Link>
        <Link to="/tasks/uncoming">
          <div className="navbar_buttons-icon"><MdOutlinePending /></div>
          <div className="navbar_buttons-text">Uncoming</div>
        </Link>
        <Link to="/tasks/pending">
          <div className="navbar_buttons-icon"><MdOutlinePendingActions /></div>
          <div className="navbar_buttons-text">Pending</div>
        </Link>
      </div>
      
      <div className="navbar_lists">
        <div className="navbar_lists-header">
          <form>
            <button className="navbar_lists-header--add"><IoIosAdd /></button>
            <p className="navbar_lists-header--title">Lists</p>
          </form>
        </div>
        
        <div className="navbar_lists-main"></div>
      </div>
    </nav>
  )
}

export default Navbar;