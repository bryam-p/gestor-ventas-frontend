import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home/Home"
import { Login } from "../components/Login/Login"
import { Register } from "../components/Register/Register"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
    </Routes>
  )
}
