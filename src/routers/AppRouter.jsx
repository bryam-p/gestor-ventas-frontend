import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { LoginScreen } from "../pages/Login/LoginScreen"
import { RegisterScreen } from "../pages/Register/RegisterScreen"
import { NavBar } from "../layout/NavBar/NavBar"
import Users from "../pages/Users/Users"


export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}
