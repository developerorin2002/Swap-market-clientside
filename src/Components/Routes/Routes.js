import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AdminPrivateRoute from "../Pages/AdminPrivateRoute/AdminPrivateRoute";
import AllBuyers from "../Pages/AllBuyes/AllBuyers";
import AllSeller from "../Pages/AllSeller/AllSeller";
import Blogs from "../Pages/Blogs/Blogs";
import BuyerPrivateRoute from "../Pages/BuyerPrivateRoute/BuyerPrivateRoute";
import DisplayCars from "../Pages/DisplayCars/DisplayCars";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyProduct from "../Pages/MyProduct/MyProduct";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import ReportedItems from "../Pages/ReportedItems/ReportedItems";
import SellerPrivateRoute from "../Pages/SellerPrivateRoute/SellerPrivateRoute";
import ThankYou from "../Pages/ThankYou/ThankYou";
import WelcomeDashboard from "../Pages/WelcomeDashboard/WelcomeDashboard";
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
                path:'/blogs',
                element:<Blogs></Blogs>
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
                element:<WelcomeDashboard></WelcomeDashboard>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>
            },
            {
                path:'/dashboard/myorder',
                element:<BuyerPrivateRoute><MyOrder></MyOrder></BuyerPrivateRoute>
            },
            {
                path:'/dashboard/thankyou',
                element:<BuyerPrivateRoute><ThankYou></ThankYou></BuyerPrivateRoute>
            },
            {
                path:'/dashboard/reported',
                element:<AdminPrivateRoute><ReportedItems></ReportedItems></AdminPrivateRoute>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminPrivateRoute><AllSeller></AllSeller></AdminPrivateRoute>
            },
            {
                path:'/dashboard/allbuyer',
                element:<AdminPrivateRoute><AllBuyers></AllBuyers></AdminPrivateRoute>
            },
            {
                path:'/dashboard/myproduct',
                element:<SellerPrivateRoute><MyProduct></MyProduct></SellerPrivateRoute>
            },
            {
                path:'/dashboard/payment/:id',
                loader:({params})=>fetch(`http://localhost:5000/myorders/${params.id}`),
                element:<BuyerPrivateRoute><Payment></Payment></BuyerPrivateRoute>
            }
        ]

    }
]);
export default router;