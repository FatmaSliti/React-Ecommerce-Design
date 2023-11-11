import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Profile'
import RootLayout from './RootLayout'
import SideBar from './SideBar'
import MainContent from '../MainContent/MainContent'
import CardInfoPanel from '../CardInfoPanel/CardInfoPanel'
import Listing from './Listing/Listing'

const router = createBrowserRouter([

    { path: '/', element: <RootLayout /> },
    { path: '/Profile', element: <Profile /> },
    { path: '/listing', element: <Listing /> },
    { path: '/myCart', element: <Profile /> },
    { path: '/favorite', element: <Profile /> },
    { path: '/support', element: <Profile /> },
    { path: '/settings', element: <Profile /> },
])

const mainMenu = () => {
    return <RouterProvider router={router} />
}

export default mainMenu
