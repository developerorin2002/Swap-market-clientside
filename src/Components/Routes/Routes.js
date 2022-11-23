import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import DisplayCars from "../Pages/DisplayCars/DisplayCars";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";

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
                path:'/category/:name',
                element:<DisplayCars></DisplayCars>
            }
        ]

    }
]);
export default router;