import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import AllArtworks from "../pages/AllArtworks";
import ArtworkDetails from "../pages/ArtworkDetails";
import UpdateArtwork from "../pages/UpdateArtwork";
import AddArtwork from "../pages/AddArtwork";
import PrivateRoute from "./PrivateRoute";
import MyGallery from "../pages/MyGallery";

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
                path: 'all-artworks',
                Component: AllArtworks,
                loader: () => fetch('http://localhost:3000/artworks')
            },
            {
                path: 'artwork-details/:id',
                element: <PrivateRoute>
                    <ArtworkDetails></ArtworkDetails>
                </PrivateRoute>
            },
            {
                path: 'update-artwork/:id',
                element: <PrivateRoute>
                    <UpdateArtwork></UpdateArtwork>
                </PrivateRoute>
            },
            {
                path: 'add-artwork',
                element: <PrivateRoute>
                    <AddArtwork></AddArtwork>
                </PrivateRoute>
            },
            {
                path: 'my-gallery',
                element: <PrivateRoute>
                    <MyGallery></MyGallery>
                </PrivateRoute>
            }
        ]
    }
])