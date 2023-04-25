import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import {Suspense , lazy} from "react";
import LoadingScreen from "../components/LoadingScreen";
import AuthGuard from "../guards/AuthGuard";
import DashboardLayout from "../layouts";
import {PATH_AFTER_LOGIN} from "../utils/config";
import Page404 from "../pages/Page404";

/**
 * Loadable Function
 * @param Component
 * @returns {function(*)}
 * @constructor
 */

const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();

    return (
        <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
            <Component {...props} />
        </Suspense>
    );
};

/***
 * Router Function
 * @returns {React.ReactElement}
 * @constructor
 */

export default function Router(){
    return useRoutes([
        /// DASHBOARD ROUTES
        {
            path: '/',
            element:(
                <AuthGuard>
                    <DashboardLayout />
                </AuthGuard>
            ),
            children: [

                { path: '/', element: <Dashboards /> , index: true},
            ],
        },
        //// MAIN ROUTES
        {
            children: [
                {element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true},
                {path: '*', element: <Page404/>}
            ],
        }
    ])
}

/**
 * Dashboard Route
 * @type {function(*)}
 */

const Dashboards = Loadable(lazy(() => import('../pages/Dashboard')));