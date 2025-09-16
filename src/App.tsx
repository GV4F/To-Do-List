import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// * Páginas

import Navbar from "./Components/Navbar";
const Home = lazy(() => import("./Pages/Home"));
const AllTasks = lazy(() => import("./Pages/AllTasks"));
const CompletedTask = lazy(() => import("./Pages/CompletedTask"));
const IncompletedTask = lazy(() => import("./Pages/IncompletedTask"));

// * Context
import NavbarDisplayContextProvider from "./Context/NavbarDisplayContext";
import SearchContextProvider from "./Context/SearchContext";


function App() {

  return (
    <NavbarDisplayContextProvider>
    <SearchContextProvider>
      <main>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/tasks" element={<AllTasks />}></Route>
              <Route path="/tasks/completed" element={<CompletedTask />}></Route>
              <Route path="/tasks/pending" element={<IncompletedTask />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </main>
    </SearchContextProvider>
    </NavbarDisplayContextProvider>
  )
}

export default App
