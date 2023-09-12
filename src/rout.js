import React from "react"
import { Routes,Route } from "react-router-dom"
import Signup from "./signup"
import Login from "./login"
const Rout = () => {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Signup/>} ></Route>
            <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    )
}
export default Rout