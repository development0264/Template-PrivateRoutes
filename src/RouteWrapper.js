import { useRoutes } from "react-router-dom";
import { AuthContainer, LayoutContainer } from "./Containers";
import { Dashboard, Login } from "./Pages"
import { SignUp } from "./Pages"

const COMMON_ROUTES = [{
    path: 'login',
    element: <Login />
}];

const userRoutes = {
    ADMIN: [{
        path: 'dashboard',
        element: <Dashboard />
    }],
    USER_1: [
        ...COMMON_ROUTES,
    ],
}
export const RouteWrapper = () => {
    const routes = useRoutes([
        {
            path: '/login',
            exact: true,
            element: <AuthContainer />,
            children: [
                {
                    path: '',
                    element: <Login />
                }
            ]
        },
        {
            path: '/SignUp',
            exact: true,
            element: <AuthContainer />,
            children: [
                {
                    path: '',
                    element: <SignUp />
                }
            ]
        }, {
            path: '/admin',
            exact: true,
            element: <LayoutContainer />,
            // children: userRoutes[userData?.role], Commented Due to Undefined userData
            children: userRoutes['ADMIN']
        }, {
            path: '*',
            exact: true,
            element: <AuthContainer />,
            children: [
                {
                    path: '',
                    element: <Login />
                }
            ]
        }
    ])
    return routes
}