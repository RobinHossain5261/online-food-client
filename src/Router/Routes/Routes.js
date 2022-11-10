import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import ProductDetails from "../../pages/Products/ProductDetails";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://online-food-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/review',
                element: <PrivetRoute><Orders></Orders></PrivetRoute>
            }

        ],
    }
]);

export default router;