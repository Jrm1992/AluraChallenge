import { Route, Routes } from "react-router-dom";
import AllItems from "../Pages/AllItems";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtos" element={<AllItems />} />
    </Routes>
  )
}