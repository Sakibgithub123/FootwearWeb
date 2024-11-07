import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Products/ProductDetails/ProductDetails";
import ProductBar from "../pages/AllProducts/ProductBar/ProductBar";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import Shop from "../pages/AllProducts/Shop/Shop";
// import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Additems from "../pages/Dashboard/Additems/Additems";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            },
        
            {
                path:'/login',
                element:<Login></Login>
            },
        
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:
        [
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'addItems',
                element:<Additems></Additems>
            },
            {
                path:'manageitems',
                element:<ManageItems></ManageItems>
            }

        ]
    }
]);


