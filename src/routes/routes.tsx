import { createBrowserRouter } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "../pages/Home"
import Properties from "../pages/Properties"

export const router = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: 'auth',
        element: <Auth />
    },
    {
        path: 'properties',
        element: <Properties />
    },
])