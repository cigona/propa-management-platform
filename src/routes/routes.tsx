import { createBrowserRouter } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "../pages/Home"
import Properties from "../pages/Properties"
import addProperties from "../pages/add-property"
import AddProperties from "../pages/add-property"

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
    {
        path: 'add-properties',
        element: <AddProperties/>
    },
])