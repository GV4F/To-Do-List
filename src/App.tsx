// * Páginas
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import DataBaseContextProvider from "./Context/DataBaseContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarDisplayContextProvider from "./Context/NavbarDisplayContext";
import SearchContextProvider from "./Context/SearchContext";
import AllTasks from "./Pages/AllTasks";
import CompletedTask from "./Pages/CompletedTask";
import IncompletedTask from "./Pages/IncompletedTask";

function App() {

  return (
    <NavbarDisplayContextProvider>
    <SearchContextProvider>
    <DataBaseContextProvider>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tasks" element={<AllTasks />}></Route>
            <Route path="/tasks/completed" element={<CompletedTask />}></Route>
            <Route path="/tasks/pending" element={<IncompletedTask />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </DataBaseContextProvider>
    </SearchContextProvider>
    </NavbarDisplayContextProvider>
  )
}

export default App
