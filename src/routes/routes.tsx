import { createBrowserRouter } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "../pages/Home"

export const router = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: 'auth',
        element: <Auth />
    },
])