import { createBrowserRouter } from "react-router-dom"
import Auth from "../pages/Auth/Auth"
import Home from "../pages/dashboard/Home"
import Properties from "../pages/dashboard/properties/Properties"
import AddProperties from "../pages/dashboard/properties/add-property"
import Active from "../pages/dashboard/tenants/Active"
import Prospective from "../pages/dashboard/tenants/Prospective"
import Landing from "../pages/Landing"
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp"
import SetupComplete from "../pages/Auth/SetupComplete"

export const router = createBrowserRouter([
    {
        path: '',
        element: <Landing />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'sign-up',
        element: <SignUp />
    },
    {
        path: 'setup-complete',
        element: <SetupComplete />
    },
    {
        path: 'dashboard',
        element: <Home />
    },
    {
        path: 'properties',
        children: [
            {
                path: '',
                element: <Properties />
            },
            {
                path: 'add',
                element: <AddProperties />
            },
        ]
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