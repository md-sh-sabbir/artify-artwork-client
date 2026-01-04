import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import AllArtworks from "../pages/AllArtworks";
import ArtworkDetails from "../pages/ArtworkDetails";
import AddArtwork from "../pages/AddArtwork";
import PrivateRoute from "./PrivateRoute";
import MyGallery from "../pages/MyGallery";
import MyFavorites from "../pages/MyFavorites";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const navigatLoader = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return null
}

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        loader: navigatLoader,
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
                path: '/all-artworks',
                Component: AllArtworks,
                loader: () => fetch('https://artify-artwork-server.vercel.app/artworks')
            },
            {
                path: 'artwork-details/:id',
                element: <PrivateRoute>
                    <ArtworkDetails></ArtworkDetails>
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
            },
            {
                path: 'favorites',
                element: <PrivateRoute>
                    <MyFavorites></MyFavorites>
                </PrivateRoute>
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'terms-of-use',
                element: <TermsOfUse></TermsOfUse>
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },

        ]
    }
])