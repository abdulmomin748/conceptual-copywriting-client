import Blog from "../../components/pages/Blog/Blog";
import Home from "../../components/pages/Home/Home";
import LogIn from "../../components/pages/LogIn/LogIn";
import Register from "../../components/pages/Register/Register";
import Services from "../../components/pages/Services/Services";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/hservices')
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <LogIn />
            }
        ]
    }
])
export default router;