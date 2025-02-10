import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
// * ICONOS
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { NavbarDisplayContext } from "../Context/NavbarDisplayContext";
import { SearchContext } from "../Context/SearchContext";


function Navbar(): React.JSX.Element {

  const { active, setActive } = useContext(NavbarDisplayContext);
  const { search, setSearch } = useContext(SearchContext);
  const [btnActive, setBtnActive] = useState<number>(0);

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
          <input type="text" placeholder="Search" className="navbar_search-input" value={search}
          onChange={(e)=> {
            setSearch(e.target.value);
            console.log(search);
          }}
          />
        </form>
      </div>

      <div className="navbar_buttons">
        <Link to="/" className={`${btnActive == 0 ? "btnActive" : ""}`} onClick={()=> setBtnActive(0)}>
          <div className="navbar_buttons-icon"><IoIosHome /></div>
          <div className="navbar_buttons-text">Home</div>
        </Link>
        <Link to="/tasks" className={`${btnActive == 1 ? "btnActive" : ""}`} onClick={()=> setBtnActive(1)}>
          <div className="navbar_buttons-icon"><FaTasks /></div>
          <div className="navbar_buttons-text">Tasks</div>
        </Link>
        <Link to="/tasks/completed" className={`${btnActive == 2 ? "btnActive" : ""}`} onClick={()=> setBtnActive(2)}>
          <div className="navbar_buttons-icon"><FaRegCheckCircle /></div>
          <div className="navbar_buttons-text">Completed</div>
        </Link>
        <Link to="/tasks/pending" className={`${btnActive == 3 ? "btnActive" : ""}`} onClick={()=> setBtnActive(3)}>
          <div className="navbar_buttons-icon"><MdOutlinePendingActions /></div>
          <div className="navbar_buttons-text">Pending</div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;