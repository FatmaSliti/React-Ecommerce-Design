import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Profile'
import RootLayout from './RootLayout'
import SideBar from './SideBar'
import MainContent from '../MainContent/MainContent'
import CardInfoPanel from '../CardInfoPanel/CardInfoPanel'
import Listing from './Listing/Listing'
import Support from './Support'
import SignIn from '../Logout/SignIn'
import SignUp from '../Logout/SignUp'

const router = createBrowserRouter([
    // { path: '/', element: <RootLayout /> },
    { path: '/', element: <SignIn /> },
    { path: '/root', element: <RootLayout /> },
    { path: '/Profile', element: <Profile /> },
    { path: '/listing', element: <Listing /> },
    { path: '/myCart', element: <Profile /> },
    // { path: '/favorite', element: <Profile /> },
    { path: '/support', element: <Support /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
])

const mainMenu = () => {
    return <RouterProvider router={router} />
}

export default mainMenu
