import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavBar } from '../layout/NavBar/NavBar'
import { Home } from '../pages/Home/Home'
import { LoginScreen } from '../pages/Login/LoginScreen'
import { RegisterScreen } from '../pages/Register/RegisterScreen'
import { Users } from '../pages/Users/Users'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/login" element={<LoginScreen />} ></Route>
                            <Route path="/register" element={<RegisterScreen />} ></Route>
                        </Routes>
                    </PublicRoute>
                }
                />


                <Route path="/*" element={
                    <PrivateRoute>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </PrivateRoute>
                }
                />

            </Routes>
        </BrowserRouter>
    )
}


