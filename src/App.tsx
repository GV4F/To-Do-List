// * Páginas
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import DataBaseContextProvider from "./Context/DataBaseContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarDisplayContextProvider from "./Context/NavbarDisplayContext";

function App() {

  return (
    <NavbarDisplayContextProvider>
    <DataBaseContextProvider>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </DataBaseContextProvider>
    </NavbarDisplayContextProvider>
  )
}

export default App
