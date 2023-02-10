import { createBrowserRouter } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "../pages/dashboard/Home"
import Properties from "../pages/dashboard/properties/Properties"
import AddProperties from "../pages/dashboard/properties/add-property"
import Active from "../pages/dashboard/tenants/Active"
import Prospective from "../pages/dashboard/tenants/Prospective"

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
    {
        path: 'Tenants',
        element: <Active/>,
        children: [
            {
                path: 'active',
                element: <Active/>
            },
            {
                path: 'prospective',
                element: <Prospective/>
            },
        ]
    },
])