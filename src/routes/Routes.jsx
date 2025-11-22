import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import AllArtworks from "../pages/AllArtworks";

export const router = createBrowserRouter([
    {
        path: '/',
        Component : MainLayout,
        children: [
            {
                index: true,
                Component: HomeLayout
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'allArtworks',
                Component: AllArtworks
            }
        ]
    }
])