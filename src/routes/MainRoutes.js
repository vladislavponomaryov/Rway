import MainLayout from "../layout/MainLayout";
import Loadable from '../components/common/Loadable'
import {lazy} from "react";

const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')))
const Messages = Loadable(lazy(() => import('../pages/messages')))
const News = Loadable(lazy(() => import('../pages/news')))
const Profile = Loadable(lazy(() => import('../pages/profile')))
const Users = Loadable(lazy(() => import('../pages/users')))

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ],
        },
        {
            path: 'profile',
            element: <Profile />
        },
        {
            path: 'messages',
            element: <Messages />
        },
        {
            path: 'users',
            element: <Users />
        },
        {
            path: 'News',
            element: <News />
        }
    ]
}

export default MainRoutes