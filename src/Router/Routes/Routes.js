import Blog from "../../components/pages/Blog/Blog";
import Home from "../../components/pages/Home/Home";
import LogIn from "../../components/pages/LogIn/LogIn";
import Register from "../../components/pages/Register/Register";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
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