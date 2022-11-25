import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import DisplayCars from "../Pages/DisplayCars/DisplayCars";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/category/:category',
                loader:({params})=>fetch(`http://localhost:5000/allcars/${params.category}`),
                element:<PrivateRoute><DisplayCars></DisplayCars></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/myorder',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            }
        ]

    }
]);
export default router;