import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../components/Home/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }

])

export default router;