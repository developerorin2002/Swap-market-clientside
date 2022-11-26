import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import DisplayCars from "../Pages/DisplayCars/DisplayCars";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Register from "../Pages/Register/Register";
import SellerPrivateRoute from "../Pages/SellerPrivateRoute/SellerPrivateRoute";
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

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>
            },
            {
                path:'/dashboard/myorder',
                element:<MyOrder></MyOrder>
            }
        ]

    }
]);
export default router;