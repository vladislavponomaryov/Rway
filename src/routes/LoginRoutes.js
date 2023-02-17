import Loadable from "../components/common/Loadable";
import {lazy} from "react";

const MinimalLayout = Loadable(lazy(() => import("../layout/MinimalLayout")))
const AuthLogin = Loadable(lazy(() => import("../pages/authentication/LoginContainer")))

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: '/login',
            element: <AuthLogin/>
        }
    ]
}

export default LoginRoutes